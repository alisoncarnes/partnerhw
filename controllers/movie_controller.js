const express = require('express')
const movies = express.Router()
const Movies = require('../models/movies.js')
const movieSeed = require('../models/movies_seed.js')


//POST

movies.post('/', (req, res)=>{
  Movies.create(req.body, (err, createdMovies)=>{
    Movies.find({}, (err, foundMovies)=>{
      res.json(foundMovies)
    })
  })
})

module.exports = movies
