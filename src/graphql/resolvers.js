export const resolvers = {
    Mutation: {
      newNotification: async (_, { input }, { cache }) => {
        cache.writeData({
          data: { getNotification: { __typename: 'Notification', id: 1, ...input } },
        });
  
        return null;
      },
      deleteNotification: (_, variables, { cache }) => {
        cache.writeData({
          data: { getNotification: null },
        });
  
        return null;
      },
    },
  };
  
  export default resolvers;
  
  