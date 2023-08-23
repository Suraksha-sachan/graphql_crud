const { gql } = require('apollo-server-express');

const typeDefs = gql`

scalar Timestamp

type Book {
  id: ID!
  title: String!
  author: String!
}

type ZendeskUserToken {
  id: ID!
  createdAt: Timestamp
  updateAt: Timestamp
  access_token: String!
  onpage_integration_token: Int!
  clientID: String!
  clientSecret: String!
  subDomain: String!
}

type Query {
  books: [Book!]!
  book(id: ID!): Book
  zendeskUserToken: [ZendeskUserToken!]
}

type Mutation{
  addBook(title: String! , author: String!) : Book!
  updateBook(id: ID! , title: String! , author: String!) : Book!
  deleteBook(id: ID!) : Boolean!
}
`;

module.exports = typeDefs;