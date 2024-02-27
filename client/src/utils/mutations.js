import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $title: String!, 
    $authors: [String]!, 
    $description: String!, 
    $image: String, 
    $link: String ) {
      saveBook(title: $title) {
        _id
        thoughtText
        thoughtAuthor
        createdAt
        comments {
          _id
          commentText
        }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(
    $title: String!, 
    $authors: [String]!, 
    $description: String!, 
    $image: String, 
    $link: String ) {
      removeBook(thoughtText: $thoughtText) {
        _id
        thoughtText
        thoughtAuthor
        createdAt
        comments {
          _id
          commentText
        }
    }
  }
`;