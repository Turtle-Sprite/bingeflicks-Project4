// require packages
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rowdy = require('rowdy-logger')
const stripe = require("./controllers/stripe")
const path = require('path')

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
app.use('/api/users', require('./controllers/users.js'))
app.use('/api/movies', require('./controllers/movies.js'))
app.use('/api/orders', require('./controllers/orders.js'))
app.use('/api/reviews', require('./controllers/reviews.js'))

//Serves Static assets if in production. 
if (process.env.NODE_ENV === 'production') {
//set static folder
  app.use(express.static(path.join(__dirname, "/Frontend/build")));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/Frontend/build', 'index.html'));
  });
}


// hey listen
app.listen(PORT, () => {
  rowdyResults.print()
  console.log(`is that port ${PORT} I hear? 🙉`)
})
