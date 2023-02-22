import { BrowserRouter as Router, Routes, Route, redirect, Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import TMDBMovieDetails from './Components/Pages/TMDBMovieDetails'
import Homepage from './Components/Pages/Homepage'
import UserLogin from './Components/Pages/UserLogin'
import UserSignup from './Components/Pages/UserSignup'
import NotFound from './Components/Pages/NotFound'
import Cart from './Components/Pages/Cart'
import CheckoutSuccess from './Components/partials/CheckoutSuccess'
import Navbar from './Components/partials/Navbar'
import Footer from './Components/partials/Footer'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // let navigate = Navigate
  const [currentUser, setCurrentUser] = useState(null)
  //TMDB films
  const [films, setFilm] = useState([])
  //get info from db and search fav array for conditional rendering
  const [favoritesArray, setFavoritesArray] = useState([])
  let [signInError, setSignInError] = useState('')
  const [errorMsg, setErrorMsg] = useState(false)
  //sets moviedetails based on the film which rendered the "See Film Details" button
  let [movieDetails, setMovieDetails] = useState({})
  const [moviePrice, setMoviePrice] = useState(999)
  //reviews from db
  const [reviews, setReviews] = useState([])
  //Info for posting reviews
  const [userReview, setUserReview] = useState({
    title: '',
    content: '',
    rating: '',
    movieTitle: '',
  })

  const [cartProducts, setCartProducts] = useState([
    {
      title: null,
      price: null,
      overview: null,
      TMDBId: null,
    }
  ])

  //Cart movieTitle, moviePrice, movieGenre
  async function handleAddToCart(item, price) {
    // console.log(item, " ",price, "add to cart")

    cartProducts.forEach(cartItem => {
      
      // console.log(cartItem.movieTitle, " cart",price, "add to cart", item.title)
      if(cartItem.movieTitle == null) {
        setCartProducts([
          {
            movieTitle: item.title,
            moviePrice: price,
            movieDescription: item.overview,
            TMDBid:item.id
          }
        ])

      } else if (cartItem.movieTitle != item.title) {

           setCartProducts([
          ...cartProducts,
          {
            movieTitle: item.title,
            moviePrice: price,
            movieDescription: item.overview,
            TMDBid:item.id
         }
        ])
      } 
    })
    try {
      const token = localStorage.getItem('jwt')
      // make the auth headers
      const options = {
        headers: {
          'Authorization': token
        }
      }

      // const postResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/orders`, cartProducts, options)
      // console.log("post reponse", postResponse)
      // const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/orders`, options)
      
      // setCartProducts(response.data)
    } catch (err) {
      console.log("POST error", err)
    }
  }

  function handleDeleteFromCart(item) {
    const newProducts = cartProducts?.filter(cartItem => {
      return cartItem.title !== item.title
    })

    setCartProducts(newProducts)
  }

  function getTotalCost() {
    let totalCost = 0
    for (let i = 0; i < cartProducts.length; i++) {
      totalCost = totalCost + cartProducts[i].price
    }
    return totalCost
  }

  //Checks for user login
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

  // event handler to log the user out 
  const handleLogout = () => {
    // check to see if a token exists in local storage
    if (localStorage.getItem('jwt')) {
      // if so, delete it
      localStorage.removeItem('jwt')
      // set the user in the App state to be null
      setCurrentUser(null)
    }
  }

  //call TMDB API for current films
  const getFilmsTMDB = async () => {
    try{
      const response = await axios.get(`https://binge-flicks.herokuapp.com/api/movies`)
      setFilm(response.data.results)
    } catch (err) {
      console.warn('err in getFilmsTMDB', err)
    }
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
      const response = await axios.get(`https://binge-flicks.herokuapp.com/api/movies/favorites`, options)

      setFavoritesArray(response.data)
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
      const response = await axios.post(`https://binge-flicks.herokuapp.com/api/movies/${filmDetails.title}`, filmDetails, options)
      getFavorites()
    } catch (err) {
      console.log(err)
    }
  }
  /////DELETE FAVORITES
  async function handleDeleteFavorite(filmDetails) {
    try {

      const token = localStorage.getItem('jwt')
      // make the auth headers
      const options = {
        headers: {
          'Authorization': token
        }
      }
      //DELETE the movie from the user's favorites array
      const response = await axios.delete(`https://binge-flicks.herokuapp.com/api/movies/${filmDetails.title}`, options)
      getFavorites()
    } catch (err) {
      console.log(err.response.data)
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

      const response = await axios.get(`https://binge-flicks.herokuapp.com/api/reviews/${movieTitle}`, options)

      setReviews(response.data)

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

      const response = await axios.post(`https://binge-flicks.herokuapp.com/api/reviews/${userReview.movieTitle}`, userReview, options)
      // navigate(`/movies/${movieDetails.title}`)

    } catch (err) {
      console.log("POST reviews error", err)
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

      const response = await axios.delete(`https://binge-flicks.herokuapp.com/api/reviews/${reviewId}`, options)

    } catch (err) {
      console.log("DELETE reviews error", err)
    }
  }

  console.log()
  return (
    <div>
      <div className="page-container">
        <div className="main">
          <Router>
            <Navbar currentUser={currentUser} handleLogout={handleLogout} />
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
                signInError={signInError}
                setSignInError={setSignInError}
                setMovieDetails={setMovieDetails}
                getFilmsTMDB={getFilmsTMDB}
                getFavorites={getFavorites} />}
                handleAddToCart={handleAddToCart}
                handleDeleteFromCart={handleDeleteFromCart}
                cartProducts={cartProducts}
                moviePrice={moviePrice}
              />

              <Route path="/movies/:id" element={<TMDBMovieDetails
                currentUser={currentUser}
                postReviews={postReviews}
                setUserReview={setUserReview}
                userReview={userReview}
                movieDetails={movieDetails}
                getReviews={getReviews}
                deleteReviews={deleteReviews}
                reviews={reviews}
                handleAddToCart={handleAddToCart}
                handleDeleteFromCart={handleDeleteFromCart}
                cartProducts={cartProducts}
                moviePrice={moviePrice}
              />} />

              <Route path="/cart" element={<Cart 
              currentUser={currentUser} 
              cartProducts={cartProducts} 
              handleAddToCart={handleAddToCart} 
              handleDeleteFromCart={handleDeleteFromCart}/>} />
              
              <Route path="/checkout-success" element={<CheckoutSuccess currentUser={currentUser} cartProduccts={cartProducts}/>} />
              <Route path="/login" element={<UserLogin currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
              <Route path="/signup" element={<UserSignup currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
