// require packages
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rowdy = require('rowdy-logger')
const stripe = require("./Backend/controllers/stripe")

// config express app
const app = express()
const PORT = process.env.PORT || 8000
// for debug logging
const rowdyResults = rowdy.begin(app)
// cross origin resource sharing
app.use(cors())
// request body parsing
app.use(express.json())

//request stripe api
app.use("/stripe", stripe)

//set up res.locals here

// controllers
app.use('/users', require('./Backend/controllers/users.js'))
app.use('/movies', require('./Backend/controllers/movies.js'))
app.use('/orders', require('./Backend/controllers/orders.js'))
app.use('/reviews', require('./Backend/controllers/reviews.js'))

app.use(express.static(path.join(__dirname, "/Frontend/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/Frontend/build', 'index.html'));
});

// hey listen
app.listen(PORT, () => {
  rowdyResults.print()
  console.log(`is that port ${PORT} I hear? 🙉`)
})
