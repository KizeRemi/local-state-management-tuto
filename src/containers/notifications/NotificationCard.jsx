import React, { Fragment } from 'react';
import { Query, Mutation } from 'react-apollo';

import { GET_NOTIFICATION, DELETE_NOTIFICATION } from '../../graphql/locale/notification';
import Message from './Message';

const Notification = () => (
  <Mutation mutation={DELETE_NOTIFICATION}>
    {deleteNotification => (
      <Query query={GET_NOTIFICATION}>
        {({ data: { getNotification } = {} }) => {

          return(
            <Fragment>
              {getNotification && (
                <Message
                  header={getNotification.header}
                  content={getNotification.content}
                  onDismiss={deleteNotification}
                  type={getNotification.type}
                  ttl={7000}
                />
              )}
            </Fragment>
          );
        }}
      </Query>
    )}
  </Mutation>
);

export default Notification;
