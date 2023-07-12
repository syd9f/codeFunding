import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
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

// , $donations: Float!
// , donations: $donations
export const CREATE_PROJECT = gql`
  mutation createProject($projectTitle: String!, $projectDescription: String!, $donationGoal: Int!) {
    createProject(projectTitle: $projectTitle, projectDescription: $projectDescription, donationGoal: $donationGoal) {
      _id
      projectTitle
      projectDescription
      # donations
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

