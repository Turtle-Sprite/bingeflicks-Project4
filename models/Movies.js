const mongoose = require('mongoose')

const MoviesSchema = new mongoose.Schema({
    movieTitle: {
        type: String 
    },
    movieGenre: {
        type: String 
    },
    moviePoster: {
        type: String
    },
    movieTrailer: {
        type: String
    },
    movieVideo: {
        type: String
    },
    movieDescription: {
        type: String
    },
    TMDBId: {
        type: String
    },
    releaseDate: {
        type: String
    },
    moviePrice: {
        type: Number
    },
    movieFavorite: {
        type: Boolean
    },

    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    reviewId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
}, {
    timestamps: true 
})

//turn the schema into a model
module.exports = mongoose.model('Movies', MoviesSchema)