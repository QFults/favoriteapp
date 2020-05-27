const mysql = require('mysql2')

module.exports = mysql.createConnection('mysql://root:root@localhost:3306/favorite_db')
