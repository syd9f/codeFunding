import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser($email: String!, $password: String!) {
    registerUser(email: $email, password: $password) {
      id
      email
      // Include any additional user fields you want to retrieve after registration
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        email
        // Include any additional user fields you want to retrieve after login
      }
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject($title: String!, $description: String!, $goalAmount: Float!) {
    createProject(title: $title, description: $description, goalAmount: $goalAmount) {
      id
      title
      description
      goalAmount
      // Include any additional project fields you want to retrieve after creation
    }
  }
`;

export const MAKE_DONATION = gql`
  mutation MakeDonation($projectId: ID!, $amount: Float!) {
    makeDonation(projectId: $projectId, amount: $amount) {
      id
      // Include any additional fields you want to retrieve after donation
    }
  }
`;

