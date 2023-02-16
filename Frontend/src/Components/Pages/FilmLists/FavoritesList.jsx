import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'

function FavoritesList({ favoritesDetails, favoritesArray, handleFavorite, handleDeleteFavorite, handleToggleFavorites, setMovieDetails }) {
    let moviePrice = 0.99
    let alreadyFav = false
    let favFilms = ''
    console.log(favoritesDetails)
    
    if(favoritesDetails.length > 0) {
    favFilms = favoritesDetails.map((film, idx) => {
        if (favoritesArray.includes(film.title)) {
            alreadyFav = true
        } else {
            alreadyFav = false
        }
        return (
            <Card key={idx} style={{ maxWidth: "350px", color: "slategrey", maxHeight: "350px", overflow: "scroll" }} className="m-3 hover:opacity-3">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`} alt={`Screenshot from the film ${film.title}`} className='pop-film-img' />
                <Card.Body>
                    <div>
                        {alreadyFav ?
                            <AiFillHeart className="w-8 h-8 fill-red-500" type="submit" onClick={() => {
                                handleToggleFavorites(film.title, false)
                                handleDeleteFavorite(film)
                            }} /> :

                            <AiOutlineHeart className="w-8 h-8 stroke-red-500 stroke-2" type="submit" onClick={() => {
                                handleToggleFavorites(film.title, true)
                                handleFavorite(film)
                            }} />}
                    </div>
                    <Card.Title style={{ color: "black" }} >{film.title}</Card.Title>
                    <Card.Text>
                        Description: {film.overview}
                    </Card.Text>
                    <Card.Text style={{ color: "black" }}>Price: $ {moviePrice}</Card.Text>
                    <Link to={`/movies/${film.title}`}>
                        <button type="submit" onClick={() => { setMovieDetails(film) }}>See Movie Details</button>
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