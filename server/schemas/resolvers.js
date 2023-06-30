const { Project, User, Donation } = require('../models');

// const resolvers = {
//   Query: {
//     users: async () => {
//       return User.find({});
//     },
//     project: async (parent, { _id }) => {
//       const params = _id ? { _id } : {};
//       return Project.find(params);
//     },
//   },
//   Mutation: {
//     createMatchup: async (parent, args) => {
//       const matchup = await Matchup.create(args);
//       return matchup;
//     },
//     createVote: async (parent, { _id, techNum }) => {
//       const vote = await Matchup.findOneAndUpdate(
//         { _id },
//         { $inc: { [`tech${techNum}_votes`]: 1 } },
//         { new: true }
//       );
//       return vote;
//     },
//   },
// };

// const resolvers = {
//   Project: {
//     user(parent, args, contextValue, info) {
//       return User.find((user) => user.id === args.id);
//     },
//   },
// };

module.exports = resolvers;
