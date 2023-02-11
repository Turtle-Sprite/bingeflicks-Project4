import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import MovieDetails from './Pages/MovieDetails'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem('jwt')
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token))
      console.log(currentUser)
    } else {
      setCurrentUser(null)
    }
  }, []) // happen only once

  return (
    <div className="App">
      <h1>Hello</h1>
      <MovieDetails currentUser={currentUser}/>
      <UserLogin currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <UserSignup currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
  );
}

export default App;
