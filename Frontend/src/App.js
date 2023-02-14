import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
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
import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [cart, setCart] = useState([])

  
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

  return (
    <div>
    <div className="page-container">
      <div className="main">
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Homepage currentUser={currentUser}/> }/>
        <Route path="/movies/:id" element={<MovieDetails currentUser={currentUser}/> }/>
        <Route path="/cart" element={<Cart currentUser={currentUser} cart={cart} setCart={setCart} handleAddToCart={handleAddToCart}/>}/>
        <Route path="/checkout-success" element={<CheckoutSuccess currentUser={currentUser}/>}/>
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </Router>
    
      <UserLogin currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <UserSignup currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
    </div>
      <Footer />
      </div>
  );
}

export default App;
