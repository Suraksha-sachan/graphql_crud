const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema.js');
const resolvers = require('./resolver.js');
const { myDataSource } = require('./database/config.js');

const app = express();

myDataSource.initialize()
.then(() => {
  console.log('database connected successfully.');
})
.catch((err) => {
  console.log('Error in database connection.'+err);
})

const server = new ApolloServer({
  typeDefs,
  resolvers
});

async function startApolloServer() {

  await server.start();

  server.applyMiddleware({ app });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
  });
}

startApolloServer().catch((err) => {
  console.error('Error starting Apollo server:', err);
});
