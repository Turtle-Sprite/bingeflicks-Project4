const db = require('../models')

const userCreate = async () => {
    try{
        const newUser = db.User.create({
            fname: "Ducks",
            lname: "Ponds",
            email: 'ducks@ponds',
            password: 'turtles'
        })
    } catch(err) {
        console.warn(err)
    }
}

userCreate()