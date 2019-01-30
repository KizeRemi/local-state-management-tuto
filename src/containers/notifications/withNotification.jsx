import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { NEW_NOTIFICATION } from '../../graphql/locale/notification';

const withNotification = WrappedComponent => class extends Component {
  newNotification = ({ header, content, type = 'success' }) => {
    this.mutate({
      variables: {
        input: { header, content, type },
      },
    });
  }

  render() {
    return (
      <Mutation mutation={NEW_NOTIFICATION}>
        {(mutate) => {
          this.mutate = mutate;

          return (
            <WrappedComponent
              {...this.props}
              newNotification={this.newNotification}
            />
          );
        }}
      </Mutation>
    );
  }
};

export default withNotification;
