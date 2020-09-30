const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
title: String,
year: Number,
img: { type: String, default: 'https://via.placeholder.com/200' }
})

<<<<<<< HEAD
const Movies = mongoose.model('Movies', moviesSchema)
=======
const Movies = mongoose.model('Movies', birdSchema)
>>>>>>> ca9d902aab1950d83adc30f2a307347c7c6ab71a

module.exports = Movies
