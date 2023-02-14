const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fname: {
        type: String 
    },
    lname: {
        type: String 
    },
    email: {
        type: String 
    },
    password: {
        type: String 
    },
    address: {
        street: {
          type: String
        },
        city: {
          type: String
        },
        state: {
          type: String
        },
        zip: {
          type: Number
        },
    },
    reviewId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reviews' }],
    moviesFavId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movies' }],
    orderId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
}, {
    timestamps: true 
})


module.exports = mongoose.model('User', UserSchema)