const router = require('express').Router()
const db = require('../models')

router.post('/:id/favorites', async (req, res) => {
    try {

        //find movieID and UserId
        const foundMovie = await db.Movies.findById(req.params.id)
        const foundUser = await db.User.findOne({
            email: res.locals.user
          })
          console.log(foundUser)

    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})