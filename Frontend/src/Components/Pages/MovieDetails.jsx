import { useState, useEffect } from "react";
import axios from "axios";
import AddReview from "./Reviews/AddReview";
import GetReview from "./Reviews/GetReview";
import { Card, Button } from "react-bootstrap";

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
                console.log(response.data.videos)
                setVideo(response.data.videos.results)
            })
            .catch(console.warn)
    }
    useEffect(() => {
        getFilmsTMDB()
    }, [])

    const trailersURL = videos.map(video => {
        if (video.type == "Clip" || video.type == "Trailer") {
            return (
                <iframe key={video.id} width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            )
        } else {
            return null
        }
    })

    const handleManyVideos = (trailersURL, num) => {
        console.log("array of trailers", trailersURL)
        let newArray = trailersURL.filter( trailer => {
            return trailer != null
        })
        return newArray[num]
    }
    


    return (
        <>
            
            <h1>MovieDetails</h1>
            {newVideoPlay ? 
            <Card style={{ color: "slategrey", maxHeight: "350px" }} className="m-3">
                {trailersURL.length > 1 ? handleManyVideos(trailersURL, 0) :
                trailersURL}
                <Card.Body>
                    <Card.Title>{movieDetails.movieTitle}</Card.Title>
                </Card.Body>
            </Card>
            {trailersURL.length > 1 ? handleSmallVideos(trailersURL) :
                null}
            :
                null
            }
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