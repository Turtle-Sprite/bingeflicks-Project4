import { useState, useEffect } from "react";
import axios from "axios";
import AddReview from "./Reviews/AddReview";
import GetReview from "./Reviews/GetReview";

function MovieDetails({ 
    currentUser, 
    postReviews, 
    setUserReview, 
    userReview, 
    movieDetails,
    getReviews,
    deleteReviews,
    reviews
    }) {

    const [videos, setVideo] = useState([])
    //call TMDB API for current films
    const getFilmsTMDB = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies/${movieDetails.id}`)
            .then(response => {
                //this is where the youtube key is located
                // console.log(response.data.videos.results)
                setVideo(response.data.videos.results)
            })
            .catch(console.warn)
    }
    useEffect(() => {
        getFilmsTMDB()
    }, [])

    const trailersURL = videos.map(video => {
        if(video.type == "Clip" || video.type == "Trailer") {
        return (
            <iframe key={video.id} width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            )
    } else {
        return (
            null
        )
    }
    })
    return (
        <>
        {/*  */}
            <h1>MovieDetails</h1>
           {trailersURL}
            <AddReview 
                currentUser={currentUser}
                postReviews={postReviews}
                setUserReview={setUserReview}
                userReview={userReview}
                movieDetails={movieDetails}
            />
            {/* <GetReview 
                movieDetails={movieDetails}
                reviews={reviews}
                getReviews={getReviews}
            /> */}
        </>
    );
}

export default MovieDetails;