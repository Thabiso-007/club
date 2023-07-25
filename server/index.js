const express = require('express')

require('colors')
require('dotenv').config()

const dbConnection = require('./config/connection/db')

const { server_port } = require('./config/env')

const port = server_port || 5000

const app = express()

dbConnection()

app.listen(port, () => {
    console.log(`Server is running on port: ${port}.`.white.bold)
})