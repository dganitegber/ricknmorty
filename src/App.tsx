import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Content } from "./components/Content";
import { CardList } from "./components/CardList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <NavBar />
        <Content />
      </div>
    </ApolloProvider>
  );
}

export default App;
