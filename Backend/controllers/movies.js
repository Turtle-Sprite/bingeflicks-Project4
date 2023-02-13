const router = require('express').Router()
const db = require('../models')
const authLockedRoute = require('./authLockedRoute')
const axios = require('axios'); 


//get movies from TMDB
router.get('/', async (req, res) => {
    try {
        //find movieID and UserId
        const films = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=2`)
            .then(response =>{
                return response.data
            })
            .catch(console.warn)
        res.json(films)
    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

//////POST /movies/:id - makes favorites and adds to User's & Movie's favorites arrays
router.post('/:id', authLockedRoute, async (req, res) => {
    try {
        //find movieID and UserId
        console.log(req.body.currentMovie, "current movie")
        const foundMovie = await db.Movies.findOne({
            title: req.params.id
        })
        const foundUser = await db.User.findOne({
            email: res.locals.user.email
        })
        // console.log(foundUser)
        // console.log(foundMovie)

        //Need to save the ids here

    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

module.exports = router