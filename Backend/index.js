// require packages
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rowdy = require('rowdy-logger')

// config express app
const app = express()
const PORT = process.env.PORT || 8000
// for debug logging
const rowdyResults = rowdy.begin(app)
// cross origin resource sharing
app.use(cors())
// request body parsing
app.use(express.json())


// controllers
app.use('/users', require('./controllers/users.js'))
// app.use('/movies', require('./controllers/movies.js'))
// app.use('/orders', require('./controllers/orders.js'))
// app.use('/reviews', require('./controllers/reviews.js'))

// hey listen
app.listen(PORT, () => {
  rowdyResults.print()
  console.log(`is that port ${PORT} I hear? 🙉`)
})
