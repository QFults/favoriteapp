const express = require('express')

const app = express()

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', '.hbs')
app.use(express.json())

app.use(require('./routes'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, () => console.log('http://localhost:3000'))
