import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FilmList from '../partials/FilmLists/PopularFilmList'


function Homepage({ currentUser }) {

    //TMDB films
    const [films, setFilm] = useState([])
    //get info from db and search array for conditional rendering
    const [favoritesArray, setFavoritesArray] = useState([])
    const [errorMsg, setErrorMsg] = useState(false)

    //reviews from db
    const [reviews, setReviews] = useState([])
    //Info for posting reviews
    const [userReview, setUserReview] = useState({
        title: '',
        content: '',
        rating: 0,
        movieTitle: ''
    })
    const [avgRating, setAvgRating] = useState(0)
    // const navigate = useNavigate()

    //call TMDB API for current films
    const getFilmsTMDB = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies`)
            .then(response => {
                console.log(response.data)
                setFilm(response.data.results)
            })
            .catch(console.warn)
    }
    useEffect(() => {
        getFilmsTMDB()
    }, [])

    ////GET LIST OF FAVORITES
    const getFavorites = async () => {
        try {
            const token = localStorage.getItem('jwt')
            // make the auth headers
            const options = {
                headers: {
                    'Authorization': token
                }
            }

            await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies/favorites`, options)
                .then(response => {
                    let responseArray = response.data.map(response => {
                        return response.movieTitle
                    })
                    console.log("ARRAY OF TITLES", responseArray)
                    setFavoritesArray(responseArray)
                })
                .catch(console.warn)
        } catch (err) {
            console.log("Get favorites error", err)
        }
    }
    useEffect(() => {
        getFavorites()
    }, [])

    ///MAKE FAVORITES
    async function handleFavorite(filmDetails) {
        try {

            const token = localStorage.getItem('jwt')
            // make the auth headers
            const options = {
                headers: {
                    'Authorization': token
                }
            }
            //POST the movie to the user's favorites array
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/movies/${filmDetails.title}`, filmDetails, options)
                .then(response => {
                    // console.log("data from favorite's POST",response)
                })
                .catch(console.warn)

        } catch (err) {
            console.log(err)
        }
    }
    /////DELETE FAVORITES
    async function handleDeleteFavorite(filmDetails) {
        try {
            console.log("Delete", filmDetails)
            // console.log("user", currentUser)
            const token = localStorage.getItem('jwt')
            // make the auth headers
            const options = {
                headers: {
                    'Authorization': token
                }
            }
            //DELETE the movie from the user's favorites array
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/movies/${filmDetails.title}`, options)
                .then(response => {
                    console.log("data from favorite's DELETE", response)
                    // navigate(`/movies/${response.data._id}/confirmed`)
                })
                .catch(console.warn)

        } catch (err) {
            console.log(err.response.data)
        }
    }

    /////Toggle Favorites 
    function handleToggleFavorites(filmTitle, boolean) {

        let newArray = [...favoritesArray]
        let filmIndex = newArray.indexOf(filmTitle)

        if (filmIndex < 0) {
            setFavoritesArray([...newArray, filmTitle])
        } else {
            newArray.splice(filmIndex, 1)
            setFavoritesArray(newArray)
        }
    }

    ////GET Movie Reviews based on movie Title
    const getReviews = async (movieTitle) => {
        try {
            const token = localStorage.getItem('jwt')
            // make the auth headers
            const options = {
                headers: {
                    'Authorization': token
                }
            }

            await axios.get(`${process.env.REACT_APP_SERVER_URL}/reviews/${movieTitle}`, options)
                .then(response => {
                    // let responseArray = response.data.map(response => {
                    //     return response.movieTitle
                    // })
                    console.log("ARRAY OF Reviews", response)
                    setReviews(response)
                })
                .catch(console.warn)
        } catch (err) {
            console.log("Get reviews error", err)
        }
    }

    //POST Reviews based on movie Title
    const postReviews = async (movieTitle) => {
        try {
            const token = localStorage.getItem('jwt')
            // make the auth headers
            const options = {
                headers: {
                    'Authorization': token
                }
            }

            await axios.post(`${process.env.REACT_APP_SERVER_URL}/reviews/${movieTitle}`, userReview, options)
                .then(response => {
                    console.log("Posted Review", response)
                })
                .catch(console.warn)

        } catch (err) {
            console.log("Get reviews error", err)
        }
    }

    //DELETE Reviews based on reviewId
    const deleteReviews = async (reviewId) => {
        try {
            const token = localStorage.getItem('jwt')
            // make the auth headers
            const options = {
                headers: {
                    'Authorization': token
                }
            }

            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/reviews/${reviewId}`, options)
                .then(response => {
                    console.log("Posted Review", response)
                })
                .catch(console.warn)

        } catch (err) {
            console.log("Get reviews error", err)
        }
    }

    return (
        <>
            <FilmList
                currentUser={currentUser}
                films={films}
                handleFavorite={handleFavorite}
                handleDeleteFavorite={handleDeleteFavorite}
                favoritesArray={favoritesArray}
                handleToggleFavorites={handleToggleFavorites}
                reviews={reviews}
                getReviews={getReviews}
                postReviews={postReviews}
                deleteReviews={deleteReviews}
                setUserReview={setUserReview}
                userReview={userReview}
            />
        </>
    );
}

export default Homepage;