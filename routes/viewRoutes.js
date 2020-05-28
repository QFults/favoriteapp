const router = require('express').Router()
const { Movie, Song, Game } = require('../controllers')

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

router.get('/games', (req, res) => {
  Game.getGames(games => {
    res.render('games', { games })
  })
})


module.exports = router