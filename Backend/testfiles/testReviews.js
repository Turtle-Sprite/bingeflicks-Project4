const db = require('../models')

//find/find and create
const reviewCreatOrUpdate = async () => {
    try{
        
        //find User
        const foundUser = await db.User.findById('63e69398281adae60f98ab39')
        //find Movie id
        const foundMovie = await db.User.findById('63e69398281adae60f98ab39')
        //find or update review
        const newReview = await db.Review.findOneAndUpdate(
            { movieTitle: "Hang'em High"},
            {   
                content: "This movie is dark and wonderful.",
                rating: 5,
                userId: foundUser,
                moviesId: foundMovie
            },
            { new: true, upsert: true }
        )
            
        console.log(newReview)
        
    } catch(err) {
        console.warn(err)
    }
}
reviewCreatOrUpdate()