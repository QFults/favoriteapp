const router = require('express').Router()
const { Movie } = require('../controllers')

// GET all movies
router.get('/movies', (req, res) => Movie
  .getMovies(movies => res.json(movies)))

// GET one movie
router.get('/movies/:id', (req, res) => Movie
  .getMoviesWhere({ id: req.params.id }, movie => res.json(movie)))

// POST one movie
router.post('/movies', (req, res) => Movie
  .addMovie(req.body, info => res.json(info)))

// PUT one movie
router.put('/movies/:id', (req, res) => Movie
  .updateMovie(req.body, { id: req.params.id }, info => res.json(info)))

// DELETE one movie
router.delete('/movies/:id', (req, res) => Movie
  .deleteMovie({ id: req.params.id }, info => res.json(info)))

module.exports = router
