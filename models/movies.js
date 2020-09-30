const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
title: String,
year: Number,
img: { type: String, default: 'https://via.placeholder.com/200' }
})

<<<<<<< HEAD
const Movies = mongoose.model('Movies', moviesSchema)
=======

const Movies = mongoose.model('Movies', moviesSchema)


>>>>>>> 85051ffe41c7a36895e80d5e2d5e72fc3c392d35

module.exports = Movies
