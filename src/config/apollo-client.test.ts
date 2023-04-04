import { ApolloClient, ApolloLink, createHttpLink } from "@apollo/client";
import { createAuthLink, AUTH_TYPE, AuthOptions } from "aws-appsync-auth-link";
import apolloClient from "./apollo-client";
import awsConfig from "./aws-credentials";

jest.mock("@apollo/client");

describe("apolloClient test suite", () => {
  const url = awsConfig.aws_appsync_graphqlEndpoint;
  const region = awsConfig.aws_appsync_region;
  const apiKey = awsConfig.aws_appsync_apiKey;
  const auth: AuthOptions = { type: AUTH_TYPE.API_KEY, apiKey };
  const authLink = createAuthLink({ url, region, auth });
  const httpLink = createHttpLink({ uri: url });

  test("creates an ApolloClient with the correct configuration", () => {
    expect(apolloClient.link).toEqual(ApolloLink.from([authLink, httpLink]));
  });

  test("exports the created ApolloClient instance", () => {
    expect(apolloClient).toBeInstanceOf(ApolloClient);
  });
});

export {};
