import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation createProject($projectTitle: String!, $projectDescription: String!, $donations: Float!) {
    createProject(projectTitle: $projectTitle, projectDescription: $projectDescription, donations: $donations) {
      _id
      projectTitle
      projectDescription
      donations
    }
  }
`;

export const MAKE_DONATION = gql`
  mutation donateToProject($projectId: ID!, $amount: Float!) {
    donateToProject(projectId: $projectId, amount: $amount) {
      _id
      amount
    }
  }
`;

