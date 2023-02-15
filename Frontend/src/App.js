import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import MovieDetails from './Components/Pages/MovieDetails'
import Homepage from './Components/Pages/Homepage'
import UserLogin from './Components/Pages/UserLogin'
import UserSignup from './Components/Pages/UserSignup'
import NotFound from './Components/Pages/NotFound'
import Cart from './Components/Pages/Cart'
import CheckoutSuccess from './Components/partials/CheckoutSuccess'
import Navbar from './Components/partials/Navbar'
import Footer from './Components/partials/Footer'
import axios from "axios";
import './App.css';



function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [cart, setCart] = useState([])
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
    rating: '',
    movieTitle: ''
  })
  // const [avgRating, setAvgRating] = useState(0)

  let [signInError, setSignInError] = useState('')

  //sets moviedetails based on the film which rendered the "See Film Details" button
  let [movieDetails, setMovieDetails] = useState({})

  const handleAddToCart = () => {

  }

  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem('jwt')
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token))
      // console.log(currentUser)
    } else {
      setCurrentUser(null)
    }
  }, []) // happen only once

  //call TMDB API for current films
  const getFilmsTMDB = async () => {
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies`)
      .then(response => {
        // console.log(response.data)
        setFilm(response.data.results)
      })
      .catch(console.warn)
  }
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
      console.log("get favorites invoked")
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies/favorites`, options)
      console.log(response.data)
      let responseArray = response.data.map(response => {
        return response.movieTitle
      })
      console.log("ARRAY OF TITLES", responseArray)
      setFavoritesArray(responseArray)

    } catch (err) {
      console.log("Get favorites error", err)
    }
  }

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
      // console.log("Delete", filmDetails)
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
          console.log("review of movie", response.data)
          setReviews(response.data)
        })
        .catch(console.warn)
    } catch (err) {
      console.log("Get reviews error", err)
    }
  }

  //POST Reviews based on movie Title
  const postReviews = async (e) => {
    try {
      e.preventDefault()
      console.log("postreviews", userReview)
      const token = localStorage.getItem('jwt')
      // make the auth headers
      const options = {
        headers: {
          'Authorization': token
        }
      }

      await axios.post(`${process.env.REACT_APP_SERVER_URL}/reviews/${userReview.movieTitle}`, userReview, options)
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
    <div>
      <div className="page-container">
        <div className="main">
          <Router>
            <Navbar />
            <Routes>

              <Route path="/" element={<Homepage
                currentUser={currentUser}
                postReviews={postReviews}
                setUserReview={setUserReview}
                userReview={userReview}
                movieDetails={movieDetails}
                getReviews={getReviews}
                deleteReviews={deleteReviews}
                reviews={reviews}
                films={films}
                handleFavorite={handleFavorite}
                handleDeleteFavorite={handleDeleteFavorite}
                favoritesArray={favoritesArray}
                handleToggleFavorites={handleToggleFavorites}
                signInError={signInError}
                setSignInError={setSignInError}
                setMovieDetails={setMovieDetails} 
                getFilmsTMDB={getFilmsTMDB}
                getFavorites={getFavorites}/>} />

              <Route path="/movies/:id" element={<MovieDetails
                currentUser={currentUser}
                postReviews={postReviews}
                setUserReview={setUserReview}
                userReview={userReview}
                movieDetails={movieDetails}
                getReviews={getReviews}
                deleteReviews={deleteReviews}
                reviews={reviews}
              />} />
              <Route path="/cart" element={<Cart currentUser={currentUser} cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} />} />
              <Route path="/checkout-success" element={<CheckoutSuccess currentUser={currentUser} />} />
              <Route path="/login" element={<UserLogin currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
              <Route path="/signup" element={<UserSignup currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
              {/* <Route path="/*" element={<NotFound />} /> */}
            </Routes>
          </Router>



        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
