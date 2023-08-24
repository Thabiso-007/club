const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const graphql = require('graphql')
const cors = require('cors')
require('colors')
require('dotenv').config()

const { server_port } = require('./config/env')
const dbConnection = require('./config/connection/db')
const RootQuery = require('./graphql/schemas')
const RootMutation = require('./graphql/resolvers/index')

const port = server_port || 5000
const GraphSchema = graphql.GraphQLSchema

const app = express()

dbConnection()
app.use(cors())
// app.use(authenticate)

app.use('/graphql', 
    graphqlHTTP({
        schema: new GraphSchema({ 
            query: RootQuery, 
            mutation: RootMutation 
        }),
        graphiql: true
    })
)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}.`.white.bold)
})