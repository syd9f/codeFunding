import { gql } from '@apollo/client';

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      projects {
        _id
        projectTitle
        projectDescription
        donations
      }
    }
  }
`;

export const GET_PROJECT = gql`
  query project($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      projectTitle
      projectDescription
      donations
    }
  }
`;

export const GET_PROJECTS = gql`
  query projects {
    projects {
      _id
      projectTitle
      projectDescription
      donations {
        _id
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      projects {
        _id
        projectTitle
        projectDescription
      }
    }
  }
  `;