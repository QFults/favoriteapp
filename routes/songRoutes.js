const router = require('express').Router()
const { Song } = require('../controllers')

// GET all songs
router.get('/songs', (req, res) => Song
  .getSongs(songs => res.json(songs)))

// GET one song
router.get('/songs/:id', (req, res) => Song
  .getSongsWhere({ id: req.params.id }, song => res.json(song)))

// POST one song
router.post('/songs', (req, res) => Song
  .addSong(req.body, info => res.json(info)))

// PUT one song
router.put('/songs/:id', (req, res) => Song
  .updateSong(req.body, { id: req.params.id }, info => res.json(info)))

// DELETE one song
router.delete('/songs/:id', (req, res) => Song
  .deleteSong({ id: req.params.id }, info => res.json(info)))

module.exports = router