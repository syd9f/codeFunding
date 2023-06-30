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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    oneUser: User
    projects: [Project]
    Project(_id: ID!): Project
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!)
    createProject(tech1: String!, tech2: String!): Matchup
  }
`;

module.exports = typeDefs;
