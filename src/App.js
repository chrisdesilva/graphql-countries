import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";

import Countries from "./components/Countries";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Countries />
      </div>
    </ApolloProvider>
  );
}

export default App;
