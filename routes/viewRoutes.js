const router = require('express').Router()
const { Movie, Song } = require('../controllers')

router.get('/', (req, res) => {
  res.render('home', {
    name: 'John Doe'
  })
})

router.get('/movies', (req, res) => {
  Movie.getMovies(movies => {
    res.render('movies', { movies })
  })
})

router.get('/songs', (req, res) => {
  Song.getSongs(songs => {
    res.render('songs', { songs })
  })
})


module.exports = router