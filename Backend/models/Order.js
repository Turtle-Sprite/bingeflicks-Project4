const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    movieTitle: {
        type: String 
    },
    moviePrice: {
        type: Number 
    },
    movieGenre: {
        type: String 
    },
}, {
    timestamps: true //mongoose will manage created at tand updated at fields for us
})

//turn the schema into a model so wee can use it in our j
module.exports = mongoose.model('Order', OrderSchema)