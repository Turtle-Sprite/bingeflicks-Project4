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
  moviesId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true 
})

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
    order: [OrderSchema],
    reviewId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    moviesFavId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movies' }],
}, {
    timestamps: true 
})


module.exports = mongoose.model('User', UserSchema)