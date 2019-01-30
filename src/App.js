import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/client';

import { Notifications, NotificationCard } from './containers/notifications';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Notifications />
          <NotificationCard />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
