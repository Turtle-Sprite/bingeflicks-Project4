const router = require('express').Router()
const db = require('../models')
const authLockedRoute = require('./authLockedRoute')
const axios = require('axios'); 

router.get('/', authLockedRoute, (req,res) => {
    
})

router.post('/', authLockedRoute, (req,res) => {
    
})

module.exports = router