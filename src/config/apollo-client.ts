import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { createAuthLink, AUTH_TYPE, AuthOptions } from "aws-appsync-auth-link";

import awsConfig from "./aws-credentials";

const url = awsConfig.aws_appsync_graphqlEndpoint;
const region = awsConfig.aws_appsync_region;
const auth: AuthOptions = {
  type: AUTH_TYPE.API_KEY,
  apiKey: awsConfig.aws_appsync_apiKey,
};
const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createHttpLink({ uri: url }),
]);
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default apolloClient;
