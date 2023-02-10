const mongoose = require('mongoose')

const ReviewsSchema = new mongoose.Schema({
    movieTitle: {
        type: String 
    },
    content: {
        type: String 
    },
    rating: {
        type: Number
    },
}, {
    timestamps: true //mongoose will manage created at tand updated at fields for us
})

//turn the schema into a model so wee can use it in our j
module.exports = mongoose.model('Review', ReviewSchema)