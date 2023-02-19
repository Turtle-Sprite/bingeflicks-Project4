import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'

function FavoritesList({ favoritesArray, handleFavorite, handleDeleteFavorite, handleToggleFavorites, setMovieDetails }) {
    let moviePrice = 0.99
    let alreadyFav = false
    let favFilms = ''

    let responseArray = favoritesArray.map(response => {
        return response.movieTitle
    })
    
    if(favoritesArray.length > 0) {
    favFilms = favoritesArray.map((film, idx) => {
        if (responseArray.includes(film.movieTitle)) {
            alreadyFav = true
        } else {
            alreadyFav = false
        }

        return (
            <Card key={idx} style={{ maxWidth: "350px", color: "slategrey", maxHeight: "450px", overflow: "scroll", textAlign: "center" }} className="m-3 hover:opacity-3 card-Scroll">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${film.moviePoster}`} alt={`Screenshot from the film ${film.movieTitle}`} className='pop-film-img'/>
                <Card.Body>

                    <div className="flexContainer">
                    <button className="m-4"type="submit" onClick={() => { setMovieDetails(film) }}>See Movie Details</button>
                        {alreadyFav ?
                            <AiFillHeart className="ml-6 w-8 h-8 fill-red-500" type="submit" onClick={() => {
                                handleToggleFavorites(film.moviTitle, false)
                                handleDeleteFavorite(film)
                            }} /> :

                            <AiOutlineHeart className="ml-6 w-8 h-8 stroke-red-500 stroke-2" type="submit" onClick={() => {
                                handleToggleFavorites(film.movieTitle, true)
                                handleFavorite(film)
                            }} />}
                    </div>
                    <Card.Title style={{ color: "black" }} >{film.movieTitle}</Card.Title>
                    <Card.Text className="descrShorten">
                       {film.movieDescription}
                    </Card.Text>
                    <Card.Text style={{ color: "black" }}>Price: $ {moviePrice}</Card.Text>
                    <Link to={`/movies/${film.movieTtitle}`}>
                        
                    </Link>
                </Card.Body>
            </Card >)
    })
    } else {
        favFilms = false
    }
    return (
        <div className="flexContainer">
            {favFilms ? favFilms : "No favorites yet!"}
        </div>
    );
}

export default FavoritesList;