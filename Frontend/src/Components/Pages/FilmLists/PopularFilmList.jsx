import { Link } from "react-router-dom"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Card, Button } from "react-bootstrap";

function PopularFilmList({ films, handleFavorite, handleDeleteFavorite, currentUser, favoritesArray, handleToggleFavorites, reviews, signInError, setSignInError, setRenderMovieDetails, setMovieDetails, handleAddToCart, cart, handleDeleteFromCart }) {
    let moviePrice = 9.99
    let alreadyFav = false
    // let inCart = false
    // console.log("Popular films favorites", favoritesArray)

    //map through all films and make a simple film card with data. 
    const popfilms = films.map((film, idx) => {
        if (favoritesArray.includes(film.title)) {
            alreadyFav = true
        } else {
            alreadyFav = false
        }
        //create array of titles in cart
        // const cartTitles = cart?.map(item => {
        //     return item.movieTitle
        // })

        //if the current film is in cart, conditionally render delete button
        // if(cartTitles.includes(film.title)) {
        //     inCart = true
        // } else {
        //     inCart = false
        // }

        return (
            <Card key={idx} style={{ maxWidth: "350px", color: "slategrey", maxHeight: "350px", overflow: "scroll" }} className="m-3 hover:opacity-3">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`} alt={`Screenshot from the film ${film.title}`} className='pop-film-img' />
                <Card.Body>
                    {currentUser ?
                        (
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
                        )
                        :
                        <div>
                            <button onClick={() => setSignInError('Please sign in to favorite movies.')}>Add Favorite</button>
                            <p className='error'>{signInError}</p>
                        </div>
                    }
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

    return (
        <>
        <p>{signInError}</p>
            {popfilms}
        </>
    );
}
export default PopularFilmList;