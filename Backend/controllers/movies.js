const router = require('express').Router()
const db = require('../models')
const authLockedRoute = require('./authLockedRoute')

//////POST /movies/:id - makes favorites
router.post('/:id', authLockedRoute, async (req, res) => {
    // console.log(res.locals.user, "post route")
    try {
        //find movieID and UserId
        const foundMovie = await db.Movies.findById(req.params.id)
        const foundUser = await db.User.findOne({
            email: res.locals.user.email
          })
          console.log(foundUser)

    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

module.exports = router