// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World')
  })




// LISTENER
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
