export const typeDefs = `
  enum NotificationType {
    success
    error
    warning
  }

  type Notification {
    header: String
    id: ID
    content: String
    type: NotificationType
  }

  input NotificationInput {
    header: String
    content: String
    type: NotificationType 
  }

  type Mutation {
    newNotification(input: NotificationInput!): Notification
    deleteNotification: Boolean
  }

  type Query {
    getNotification: Notification
  }
`;
