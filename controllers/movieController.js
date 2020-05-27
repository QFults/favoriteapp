const orm = require('../orm')

module.exports = {
  getMovies (cb) {
    orm.getAll('movies', movies => cb(movies))
  },
  getMoviesWhere (where, cb) {
    orm.getAllWhere('movies', where, movies => cb(movies))
  },
  addMovie (movie, cb) {
    orm.createOne('movies', movie, info => cb(info))
  },
  updateMovie (changes, where, cb) {
    orm.updateOne('movies', changes, where, info => cb(info))
  },
  deleteMovie (where, cb) {
    orm.deleteOne('movies', where, info => cb(info))
  }
}
