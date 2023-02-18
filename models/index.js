const mongoose = require('mongoose')
//create a mongodb URI and tell mongoose to connect to it
mongoose.connect(process.env.MONGODB_URI)
    .then (()=> {
        console.log('listening to db')
    })
    .catch((error) => {
        console.log(error)
    })

//use mongoose's connections methodsto validate the dbconnection and do some useful console.logs
const db = mongoose.connection

//connection success
db.once('open', () => console.log(`mongoDB has connected @ ${db.host}:${db.port}`))
//connection failure
db.on('error', err => console.log(` the data center has burned to the ground:`, err))

//export all of the models
module.exports = {
    User: require('./User'),
    Movies: require('./Movies'),
    Review: require('./Review')
}