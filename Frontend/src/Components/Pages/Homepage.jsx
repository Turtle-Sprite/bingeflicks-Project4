import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FilmList from '../partials/FilmList'


function Homepage({currentUser}) {
    const [currentMovie, setCurrentMovie] = useState('63e6e6f2de15026503b30211')
    const [films, setFilm] = useState([])
    // const navigate = useNavigate()

    const getFilms = async () => {
        const films = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies`)
            .then(response => {
                console.log(response)
                setFilm(response.data.results)
            })
            .catch(console.warn)
    }

    useEffect(() => {
        getFilms()
      }, [])

    async function handleFavorite(){
        try{
            console.log("favorite!")
            // console.log("user", currentUser)
            const token = localStorage.getItem('jwt')
					// make the auth headers
            const options = {
                headers: {
                    'Authorization': token
                }
            }
            //POST the movie to the user's favorites array
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/movies/${currentMovie}`,{}, options)
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
            <FilmList films={films}/>
            <button type="submit" onClick={handleFavorite}>Add Favorite</button>
        </>
     );
}

export default Homepage;