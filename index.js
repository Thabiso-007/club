const { ApolloServer } = require('apollo-server')

require('colors')
require("dotenv").config({ path: "./.env" });

const dbConnection = require('./config/database/db')
const { server_port } = require('./config/env/index')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers/index')

const port = server_port || 5000
dbConnection()

const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen(port, () => {
    console.log(`Server is listening on port: ${port}.`.white.bold);
})