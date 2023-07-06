const { AuthenticationError } = require('apollo-server-express');
const { Project, User, Donation } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51NOVloA8Nw7JcHSN7Yn20cRpGgeGvttcTX4vei5yeTGwjzWE0yBKrGrfaqxqRr3mbo0yRPMz10tzSvUCpHcFS42T00VePpJADW');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('projects');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('projects');
    },
    projects: async () => {
      return Project.find().populate('createdBy');
    },
    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId }).populate('createdBy');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('projects');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    createProject: async (parent, { projectInput }, context) => {
      if (context.user) {
        const project = await Project.create({
          ...projectInput,
          createdBy: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { projects: project._id } }
        );

        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeProject: async (parent, { projectId }, context) => {
      if (context.user) {
        const project = await Project.findOneAndDelete({
          _id: projectId,
          createdBy: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { projects: project._id } }
        );

        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    donateToProject: async (parent, { projectId, amount }, context) => {
      if (context.user) {
        const project = await Project.findOne({ _id: projectId });

        if (!project) {
          throw new Error('Project not found');
        }

        const paymentIntent = await stripe.paymentIntents.create({
          amount: amount,
          currency: 'usd',
          metadata: { projectId: project._id },
        });

        return {
          clientSecret: paymentIntent.client_secret,
          projectId: project._id,
        };
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;

