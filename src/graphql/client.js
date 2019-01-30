import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { defaults } from './defaults';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  resolvers,
  typeDefs,
  defaults
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: stateLink,
  cache,
});

export default client;
