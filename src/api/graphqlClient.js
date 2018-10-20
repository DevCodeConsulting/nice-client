import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

export const getBooks = async (searchTerm, args) => (
  client
    .query({
      query: gql`
      {
        books(query: "${searchTerm}") {
          ${args.join(",")}
        }
      }
    `
    })
)

export const getBook = async (id, args) => (
  client
    .query({
      query: gql`
      {
        book(id: ${id}) {
          ${args.join(",")}
        }
      }
    `
    })
)