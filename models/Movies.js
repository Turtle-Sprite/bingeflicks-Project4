const mongoose = require('mongoose')

const MoviesSchema = new mongoose.Schema({
    title: {
        type: String 
    },
    genre_ids: [{
        type: String 
    }],
    backdrop_path: {
        type: String
    },
    poster_path: {
        type: String
    },
    video: {
        type: String
    },
    overview: {
        type: String
    },
    TMDBId: {
        type: String
    },
    release_date: {
        type: String
    },
    price: {
        type: Number
    },
    favorite: {
        type: Boolean
    },

    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    reviewId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
}, {
    timestamps: true 
})

//turn the schema into a model
module.exports = mongoose.model('Movies', MoviesSchema)