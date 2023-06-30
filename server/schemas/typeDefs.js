const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    projects: [Project!]
  }

  type Project {
    _id: ID!
    title: String!
    description: String!
    likes: Int!
    donations: Int!
  }

  type Donation {
    _id: ID!
    username: String!
    amount: Int!
  }

  type Query {
    users: [User]
    oneUser: User
    projects: [Project]
    Project(_id: ID!): Project
  }

  type Mutation {
    createProject(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

module.exports = typeDefs;
