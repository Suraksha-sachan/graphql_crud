// server.js

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const userResolver = require('./resolvers/user.resolver');
const postResolver = require('./resolvers/post.resolver');
const commentResolver = require('./resolvers/comment.resolver');

const resolvers = [userResolver, postResolver, commentResolver];

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});

