import { useState, useEffect } from "react";
import axios from "axios";
import AddReview from "./Reviews/AddReview";
import GetReview from "./Reviews/GetReview";
import { Card, Button, Container } from "react-bootstrap";
import PayButton from "../partials/PayButton";

function TMDBMovieDetails({
    currentUser,
    postReviews,
    setUserReview,
    userReview,
    movieDetails,
    getReviews,
    deleteReviews,
    reviews,
    handleAddToCart,
    cartProducts,
    handleDeleteFromCart,
    moviePrice
}) {

    const [videos, setVideo] = useState([])
    //call TMDB API for current films
    const getFilmsTMDB = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies/${movieDetails.id}/video`)
            //this is where the youtube key is located

            setVideo(response.data.videos.results)
        } catch (err) {
            console.warn(err)
        }
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
        let newArray = trailersURL.filter(trailer => {
            return trailer != null
        })
        return newArray[num]

    }

    const handleSmallVideos = (trailersURL, num) => {
    }
    return (
        <>
            <Container>
                <h1>MovieDetails</h1>

                <div className="flexContainer items-center">
                    {/* are there many trailer? */}
                    {trailersURL.length > 1 ?
                        <div>
                            <Card style={{ color: "slategrey", maxHeight: "500px", maxWidth: "600" }} className="m-3">
                                {/* One Big trailer */}
                                {handleManyVideos(trailersURL, 0)}
                                <Card.Body>
                                    <Card.Title style={{ color: "slategrey" }}>{movieDetails.title}</Card.Title>
                                    
                                    <Card.Text className="descrShorten">
                                        {movieDetails.overview}
                                    </Card.Text>
                                    <Card.Text style={{ color: "black" }}>Price: $ {moviePrice}</Card.Text>
                                    <div className="flexContainer items-center ">
                                        <button type="submit" onClick={() => handleAddToCart(movieDetails, 2000)}> Add to cart</button>
                                        <PayButton cartProducts={cartProducts} currentUser={currentUser} />
                                    </div>
                                </Card.Body>
                            </Card>
                            {/* Rest are small videos */}
                            {handleSmallVideos(trailersURL, trailersURL.length)}
                        </div>
                        :

                        <Card style={{ color: "slategrey", maxHeight: "350px" }} className="m-3">
                            {handleManyVideos(trailersURL, 0)}
                            <Card.Body>
                                <Card.Title>{movieDetails.movieTitle}</Card.Title>
                            </Card.Body>
                        </Card>
                    }
                </div>

                <div className="items-center m-3">
                    <AddReview
                        currentUser={currentUser}
                        postReviews={postReviews}
                        setUserReview={setUserReview}
                        userReview={userReview}
                        movieDetails={movieDetails}
                    />
                    <GetReview
                        movieDetails={movieDetails}
                        reviews={reviews}
                        getReviews={getReviews}
                    />
                </div>
            </Container>
        </>
    );
}

export default TMDBMovieDetails;