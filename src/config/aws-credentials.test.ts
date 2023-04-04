import awsConfig from "./aws-credentials";

describe("awsConfig test suite", () => {
  test("exports an object with the expected properties", () => {
    expect(awsConfig).toEqual({
      aws_appsync_graphqlEndpoint:
        "https://prrwjjssnvhpbcdwbcwx3nm3zm.appsync-api.ap-southeast-2.amazonaws.com/graphql",
      aws_appsync_region: "ap-southeast-2",
      aws_appsync_authenticationType: "API_KEY",
      aws_appsync_apiKey: "da2-psmv7fcrw5dlpmp5orner2xf7i",
    });
  });
});

export {};