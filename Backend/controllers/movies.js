const router = require('express').Router()
const db = require('../models')

router.post('/:id/favorites', async (req, res) => {
    try {
        const addFavorites = await db.Movies.findById(req.params.id)
        
    } catch(err) {
        console.log(err)
        res.status(500).json({ msg: 'Server Error' })
    }
})