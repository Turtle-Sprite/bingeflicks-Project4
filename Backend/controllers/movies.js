const router = require('express').Router()
const db = require('../models')
const authLockedRoute = require('./authLockedRoute')
const axios = require('axios');


//get movies from TMDB
router.get('/', async (req, res) => {
    try {
        //find movieID and UserId
        const films = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            .then(response => {
                return response.data
            })
            .catch(console.warn)
        // console.log(films)
        res.json(films)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

//get favorite movies from Database
router.get('/favorites', authLockedRoute, async (req, res) => {
    try {
        //find movieID and UserId
        //populate finds all movie Ids and populates with movie information
        const foundUser = await db.User.findOne({
            email: res.locals.user.email
        }).populate("moviesFavId")

        // console.log("get favorites",foundUser.moviesFavId, "get favorites")
        res.json(foundUser.moviesFavId)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

///GET VIDEO OF MOVIE FROM TMBD
router.get('/:id', async (req, res) => {
    try {
        //find movieID and UserId
        const films = await axios.get(`http://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`)
            .then(response => {
                // console.log(response)
                return response.data
            })
            .catch(console.warn)
        // console.log(films)
        res.json(films)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

//////POST /movies/:id - makes favorites and adds to User's & Movie's favorites arrays
router.post('/:id', authLockedRoute, async (req, res) => {
    try {
        //find movieID and UserId

        const foundUser = await db.User.findOne({
            email: res.locals.user.email
        })

        const newMovie = await db.Movies.findOneAndUpdate(
            { movieTitle: req.body.title },
            {
                moviePoster: req.body.poster_path,
                TMDBId: req.body.id,
                movieDescription: req.body.overview,
                releaseDate: req.body.release_date
            },
            { new: true, upsert: true }
        )
        // console.log(newMovie)
        foundUser.moviesFavId.push(newMovie._id)
        newMovie.userId.push(foundUser._id)

        //Need to save the ids here
        await foundUser.save()
        await newMovie.save()
        res.json(newMovie)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

//////DELETE /movies/:id - take favorites off list
router.delete('/:id', authLockedRoute, async (req, res) => {
    // console.log(req.params, "DELETE")
    try {

        const foundUser = await db.User.findOne({
            email: res.locals.user.email
        })

        const newMovie = await db.Movies.findOne(
            { movieTitle: req.params.id })

        if (newMovie._id) {
            //remove from array 
            // console.log(newMovie)
            // console.log(foundUser)
            foundUser.moviesFavId.remove(newMovie._id)
            newMovie.userId.remove(foundUser._id)
            
            //Need to save the removed arrays here
            await foundUser.save()
            await newMovie.save()
            // console.log(foundUser)

        } else {
            const msg = "No favorites to remove"
            res.json(msg)
        }
        res.json(newMovie)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})

module.exports = router