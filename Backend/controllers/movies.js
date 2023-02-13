const router = require('express').Router()
const db = require('../models')
const authLockedRoute = require('./authLockedRoute')
const axios = require('axios'); 

router.get('/', async (req, res) => {

    try {
        //find movieID and UserId
        const films = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=2`)
            .then(response =>{
                // console.log(response.data)
                return response.data
            })
            .catch(console.warn)
        console.log(films, "films")
        res.json(films)
    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

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