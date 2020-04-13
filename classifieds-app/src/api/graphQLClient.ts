import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

export const cache = new InMemoryCache()
console.log('process.env ', process.env)
const link = new HttpLink({
  credentials: 'include',
  uri: `${process.env.REACT_APP_SERVICES_URI}/graphql`
})

const client = new ApolloClient({
  cache,
  link,
})

export default client