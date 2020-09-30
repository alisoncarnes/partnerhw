const express = require('express')
const movies = express.Router()
const Movies = require('../models/movies.js')
const movieSeed = require('../models/movies_seed.js')

//get
movies.get('/', (req, res)=>{
  Movies.find({}, (err, foundMovies)=>{
    res.json(foundMovies)
  })
})


//POST

movies.post('/', (req, res)=>{
  Movies.create(req.body, (err, createdMovies)=>{
    Movies.find({}, (err, foundMovies)=>{
      res.json(foundMovies)
    })
  })
})

//PUT
movies.put('/:id', (req, res) => {
  Movies.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedMovie) => {
      if (err) {
        res.send(err)
      } else {
        Movies.find({}, (err, foundMovies) => {
          res.json(foundMovies)
        })
      }
    }
  )
})

//DELETE

movies.delete('/:id', (req, res) => {
  Movies.findByIdAndRemove(req.params.id, (err, deletedMovie) => {
    Movies.find({}, (err, foundMovies) => {
      res.json(foundMovies)
    })
  })
})

//SEED

movies.get('/seed', (req, res)=>{
  Movies.insertMany(movieSeed, (err, manyMovies)=>{
    res.redirect('/')
  })
})

module.exports = movies
