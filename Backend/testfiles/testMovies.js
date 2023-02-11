const db = require('../models')

//find/find and create
const moviesCreatOrUpdate = async () => {
    try{
        const newMovie = await db.Movies.findOneAndUpdate(
            { movieTitle: "Hang'em High"},
            {   
                moviePoster: "https://cdn.shopify.com/s/files/1/0549/5835/8762/products/W_1420.jpg?v=1641655092",
                movieTrailer: "",
                movieVideo: "",
                movieGenre: "Western",
                TMDBId: 'TMDB ',
            },
            { new: true, upsert: true }
          )
        
          
          ///////add a favorite by a user\\\\\\
          //step 1. find the user/movie
          //step 2. push a userId into the movie favorite array
          //step 3. push a newMovie Id into the User array


          //first add this reference to the user's array of favorites
          //we'll use a specific ID here, but should find the user Id from the login session....
          const foundUser = await db.User.findById('63e69398281adae60f98ab39')
          //then add the user to the movies' array so we know the user favorited that movie
          foundUser.moviesFavId.push(newMovie._id)
          newMovie.userId.push(foundUser._id)
          
          await foundUser.save()
          await newMovie.save()
        console.log(newMovie)
        console.log(foundUser)



    } catch(err) {
        console.warn(err)
    }
}
// moviesCreatOrUpdate()

const moviesDelete = async () => {
    try{
        const newMovie = await db.Movies.findById("63e6e59cde15026503b30168")
        
      
        const foundUser = await db.User.findById('63e6d615c63db41990f86e2b')
        //then remove the user from the movies' array so we know the user unfavorited that movie
        foundUser.moviesFavId.remove(newMovie._id)
        newMovie.userId.remove(foundUser._id)
          
        await foundUser.save()
        await newMovie.save()
        console.log(newMovie)
        console.log(foundUser)

    } catch(err) {
        console.warn(err)
    }
}
moviesDelete()

