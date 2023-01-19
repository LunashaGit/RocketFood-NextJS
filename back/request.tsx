import { gql } from "@apollo/client";

export const CREATE_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      firstname
      id
      isAdmin
      token
    }
  }
`;

export const CREATE_REGISTER = gql`
  mutation ($registerInput: RegisterInput) {
    register(registerInput: $registerInput) {
      id
      email
      firstname
      lastname
      isAdmin
    }
  }
`;
