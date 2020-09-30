const express = require('express')
const movies = express.Router()
const Movies = require('../models/movies.js')
const movieSeed = require('../models/movies_seed.js')


module.exports = movies
