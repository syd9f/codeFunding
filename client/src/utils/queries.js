import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser {
    getUser {
      id
      email
      // Include any additional user fields you want to retrieve
    }
  }
`;

export const GET_PROJECT = gql`
  query GetProject($projectId: ID!) {
    getProject(projectId: $projectId) {
      id
      title
      description
      goalAmount
      // Include any additional project fields you want to retrieve
    }
  }
`;

export const GET_PROJECTS = gql`
  query GetProjects {
    getProjects {
      id
      title
      description
      goalAmount
      // Include any additional project fields you want to retrieve
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
  `;