const orm = require('../orm')

module.exports = {
  getSongs (cb) {
    orm.getAll('songs', songs => cb(songs))
  },
  getSongsWhere (where, cb) {
    orm.getAllWhere('songs', where, songs => cb(songs))
  },
  addSong (song, cb) {
    orm.createOne('songs', song, info => cb(info))
  },
  updateSong (changes, where, cb) {
    orm.updateOne('songs', changes, where, info => cb(info))
  },
  deleteSong (where, cb) {
    orm.deleteOne('songs', where, info => cb(info))
  }
}
