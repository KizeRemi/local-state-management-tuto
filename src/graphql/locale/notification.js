import gql from 'graphql-tag';

export const GET_NOTIFICATION = gql`
  query GET_NOTIFICATION {
    getNotification @client {
      id
      content
      header
      type
    }
  }
`;

export const NEW_NOTIFICATION = gql`
  mutation NEW_NOTIFICATION ($input: NotificationInput!) {
    newNotification(input: $input) @client
  }
`;

export const DELETE_NOTIFICATION = gql`
  mutation DELETE_NOTIFICATION {
    deleteNotification @client
  }
`;
