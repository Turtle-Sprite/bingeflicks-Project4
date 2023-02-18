const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    title: {
        type: String 
    },
    content: {
        type: String 
    },
    rating: {
        type: Number,
        required: true,
        min: 0.5,
        max: 5
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    moviesId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movies' }
}, {
    timestamps: true //mongoose will manage created at and updated at fields for us
})

//turn the schema into a model
module.exports = mongoose.model('Review', ReviewSchema)