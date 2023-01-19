import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { AUTH_TOKEN } from "./constants";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const Client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
  link: authLink.concat(new HttpLink({ uri: "http://localhost:8000/graphql" })),
});
