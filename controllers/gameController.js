const orm = require('../orm')

module.exports = {
  getGames(cb) {
    orm.getAll('games', games => cb(games))
  },
  getGamesWhere(where, cb) {
    orm.getAllWhere('games', where, games => cb(games))
  },
  addGame(game, cb) {
    orm.createOne('games', game, info => cb(info))
  },
  updateGame(changes, where, cb) {
    orm.updateOne('games', changes, where, info => cb(info))
  },
  deleteGame(where, cb) {
    orm.deleteOne('games', where, info => cb(info))
  }
}
