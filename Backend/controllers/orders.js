const router = require('express').Router()
const db = require('../models')
const authLockedRoute = require('./authLockedRoute')
const axios = require('axios'); 

router.get('/', authLockedRoute, async (req,res) => {
    
})

router.post('/', authLockedRoute, async (req,res) => {
//    console.log("orders")
//     const foundUser = await db.User.findOne({
//         email: res.locals.user.email
//     })

//     const foundMovie = await db.Movies.findOne({
//         movieTitle: req.body.movieTitle
//     })
    console.log(req.body, "found movie")

//     const newOrder = await db.Order.create(
//         { 
//             movieTitle: req.body.movieTitle,
//             TMDBId: req.body.TMDBid,
//             movieDescription: req.body.movieDescription,
//             moviePrice: req.body.moviePrice,
//             userId: foundUser._id,
//             moviesId: foundMovie._id
//         },
//         { new: true, upsert: true }
//     )
//     // console.log(newMovie)
//     foundUser.orderId.push(newOrder._id)
//     foundMovie.orderId.push(newOrder._id)
//     newOrder.userId.push(foundUser._id)

//     //Need to save the ids here
//     await foundUser.save()
//     await foundMovie.save()
//     await newOrder.save()
//     res.json(newOrder)
})
router.post('/delete', authLockedRoute, (req,res) => {
    
})

module.exports = router