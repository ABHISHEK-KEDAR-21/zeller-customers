import React from "react";
import { ApolloProvider } from "@apollo/client";

import apolloClient from "./config/apollo-client";
import Customers from "./components/Customers/Customers";

import "./App.css";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <Customers />
      </div>
    </ApolloProvider>
  );
}

export default App;
