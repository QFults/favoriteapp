const router = require('express').Router()
const { Game } = require('../controllers')

// GET all games
router.get('/games', (req, res) => Game
  .getGames(games => res.json(games)))

// GET one game
router.get('/games/:id', (req, res) => Game
  .getGamesWhere({ id: req.params.id }, game => res.json(game)))

// POST one game
router.post('/games', (req, res) => Game
  .addGame(req.body, info => res.json(info)))

// PUT one game
router.put('/games/:id', (req, res) => Game
  .updateGame(req.body, { id: req.params.id }, info => res.json(info)))

// DELETE one game
router.delete('/games/:id', (req, res) => Game
  .deleteGame({ id: req.params.id }, info => res.json(info)))

module.exports = router
