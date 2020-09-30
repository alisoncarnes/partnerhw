const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
title: String,
year: Number,
img: { type: String, default: 'https://via.placeholder.com/200' }
})

const Movies = mongoose.model('Movies', moviesSchema)

module.exports = Movies
