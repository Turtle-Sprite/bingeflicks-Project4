const mongoose = require('mongoose')

const FavoritesSchema = new mongoose.Schema({
    movieTitle: {
        type: String 
    },
    movieGenre: {
        type: String 
    },
    moviePoster: {
        type: String
    }
}, {
    timestamps: true //mongoose will manage created at tand updated at fields for us
})

//turn the schema into a model so wee can use it in our j
module.exports = mongoose.model('Favorites', FavoritesSchema)