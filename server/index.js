const express = require('express')

require('child_process')
require('dotenv').config()

const { server_port } = require('./config/env')

const port = server_port || 5000

const app = express()
// 14:13
app.listen(port, () => {
    console.log(`Server is running on port: ${port}.`)
})

