const router = require('express').Router()
const db = require('../models')
const authLockedRoute = require('./authLockedRoute')
const axios = require('axios'); 

////GET for MovieDetails/reviews
router.get('/:id', async (req,res) => {
    try{
        const foundMovie = await db.Movies.find({
            movieTitle: req.params.id
        }).populate("reviewId")
        console.log("get reviews: ", " params:", req.params.id, "foundmovie reviews", foundMovie.reviewId)

        res.json(foundMovie.reviewId)
    }catch(err) {
        console.log(err)
    }
})

//POST for creating Reviews
router.post('/:id', authLockedRoute, async (req,res) => {
    try{

        const foundUser = await db.User.findOne({
            email: res.locals.user.email
        })
    
        const foundMovie = await db.Movies.findOne({
            movieTitle: req.body.movieTitle
        })
    
        const newReview = await db.Review.findOneAndUpdate(
            { title: req.body.title },
            {
                content: req.body.content,
                rating: req.body.rating,
                userId: foundUser._id,
                moviesId: foundMovie._id
            },
            { new: true, upsert: true }
        )
        console.log
        //users array update
        foundUser.reviewId.push(newReview._id)
        
        //movies array update
        foundMovie.reviewId.push(newReview._id)
        
        //Need to save the ids here
        await foundUser.save()
        await foundMovie.save()
        res.json(newReview)
    }catch(err) {
        console.log(err)
    }
})

//PUT update review
router.put('/:id', authLockedRoute, async (req,res) => {
    try{

    }catch(err) {
        console.log(err)
    }
})

//Delete review
router.delete('/:id', authLockedRoute, async (req,res) => {
    try{
        //find user review is associated with
        const foundUser = await db.User.findOne({
            email: res.locals.user.email
        })
        //find review to delete
        const deleteReview = await db.Review.findOne(
            { _id: req.params.id })

        //find movie review is associated with
        const foundMovie = await db.Movies.findOne({
            reviewId: deleteReview._id
        })

        if (deleteReview._id) {
            //remove from arrays 
            foundUser.reviewId.remove(deleteReview._id)
            foundMovie.reviewId.remove(deleteReview._id)
            
            //Need to save the removed arrays here
            await foundUser.save()
            await foundMovie.save()
            // console.log(foundUser)
            //remove review
            const wasDeleted = await db.Review.findOneAndDelete({
                _id: deleteReview._id
            })
        } else {
            const msg = "No favorites to remove"
            res.json(msg)
        }
        res.json(newMovie)
    }catch(err) {
        console.log(err)
    }
})

module.exports = router