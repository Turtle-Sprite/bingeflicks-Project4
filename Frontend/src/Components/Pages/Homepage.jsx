import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FilmList from '../partials/FilmList'


function Homepage({currentUser}) {
    const [currentMovie, setCurrentMovie] = useState({})
    const [films, setFilm] = useState([])
    // const navigate = useNavigate()

    const getFilms = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies`)
            .then(response => {
                setFilm(response.data.results)
            })
            .catch(console.warn)
    }

    useEffect(() => {
        getFilms()
      }, [])

    async function handleFavorite(filmDetails){
        try{
            //set the movie so we know what Id we're posting to on backend
            setCurrentMovie(filmDetails)
            console.log("favorite!", filmDetails)
            // console.log("user", currentUser)
            const token = localStorage.getItem('jwt')
					// make the auth headers
            const options = {
                headers: {
                    'Authorization': token
                }
            }

            console.log(currentMovie, "current movie")
            //POST the movie to the user's favorites array
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/movies/${currentMovie}`, currentMovie, options)
                .then(response => {
                    console.log(response)
                    // navigate(`/movies/${response.data._id}/confirmed`)
                })
                .catch(console.warn)
                
        } catch (err){
            console.log(err.response.data)
        }
    }
    return ( 
        <>
            <FilmList films={films} handleFavorite={handleFavorite} setCurrentMovie={setCurrentMovie}/>
        </>
     );
}

export default Homepage;