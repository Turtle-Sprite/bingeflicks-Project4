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
    TMDBId: {
        type: String 
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true 
})

module.exports = mongoose.model('Order', OrderSchema)