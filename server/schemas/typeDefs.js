const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    projects: [Project!]
  }

  type Project {
    _id: ID!
    projectTitle: String!
    projectDescription: String!
    likes: Int!
    donations: [Donation!]
    donationGoal: String!
  }

  type Donation {
    _id: ID!
    username: String!
    amount: Int!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    projects: [Project]
    project(_id: ID!): Project
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createProject(projectTitle: String!, projectDescription: String!): Project
    removeProject(projectId: ID!): Project
    donateToProject(projectId: ID!): Project
  }
`;

module.exports = typeDefs;
