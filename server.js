// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

//DATABASE
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// Error / success
mongoose.connection.on('error', err =>
  console.log(
    err.message,
    ' is Mongod not running?/Problem with Atlas Connection?'
  )
)

mongoose.connection.on('connected', () =>
  console.log('mongo connected: ', MONGODB_URI)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

//MIDDLEWARE
app.use(express.json()) //use .json(), not .urlencoded()
app.use(express.static('public'))

//ROUTES
const movieController = require('./controllers/movie_controller.js')
app.use('/movies', movieController)




// LISTENER
app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
