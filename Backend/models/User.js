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
        type: String 
    },
}, {
    timestamps: true //mongoose will manage created at tand updated at fields for us
})

//turn the schema into a model so wee can use it in our j
module.exports = mongoose.model('User', UserSchema)