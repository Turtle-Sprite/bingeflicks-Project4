const db = require('../models')

const userCreate = async () => {
    try{
        const newUser = db.User.create({
            fname: "Sassy",
            lname: "cats",
            email: 'catr@ponds',
            password: 'cat',
            address: {
                street: 'cat street',
                city: 'Cat city',
                state: 'CA',
                zip: 151515,
            }
        })
    } catch(err) {
        console.warn(err)
    }
}

// userCreate()

const userUpdate = async () => {
    try{
        const newUser = await db.User.findOneAndUpdate(
            { email: 'catr@ponds'},
            {   
                fname: "Sassy",
                lname: "cats",
                email: 'catr@ponds',
                password: 'cat',
                address: {
                    street: 'cat street',
                    city: 'Cat city',
                    state: 'CA',
                    zip: 151515,
                }
            },
            { new: true, upsert: true }
          )
    } catch(err) {
        console.warn(err)
    }
}

// userUpdate ()


