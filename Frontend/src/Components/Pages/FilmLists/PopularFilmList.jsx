import { Link } from "react-router-dom"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";

function PopularFilmList({ films, handleFavorite, handleDeleteFavorite, currentUser, favoritesArray, handleToggleFavorites, reviews, signInError, setSignInError, setRenderMovieDetails, setMovieDetails, handleAddToCart, cart, handleDeleteFromCart, moviePrice }) {

    // let inCart = false

    //map through all films and make aray of titles
    let responseArray = favoritesArray.map(response => {
        return response.movieTitle
    })
    //map through all films and make a simple film card with data. 
    const popfilms = films.map((film, idx) => {
        let alreadyFav = false
        //check if favorites or not
        if (responseArray.includes(film.title)) {
            alreadyFav = true
        } else {
            alreadyFav = false
        }

        return (
            <Card key={idx} style={{ maxWidth: "350px", color: "slategrey", maxHeight: "400px", overflow: "scroll" }} className="m-3 hover:opacity-3 cardScroll">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`} alt={`Screenshot from the film ${film.title}`} className='pop-film-img' />
                <Card.Body>
                    <div className="flexContainer">
                        <Link to={`/movies/${film.title}`}>

                            <button className="mr-5 my-2 self-start" type="submit" onClick={() => { setMovieDetails(film) }}>See Movie Details</button>
                        </Link>
                        {currentUser ?
                            (
                                <div>
                                    {alreadyFav ?
                                        <AiFillHeart className="ml-3 w-8 h-8 fill-red-500" type="submit" onClick={() => {

                                            handleDeleteFavorite(film)
                                        }} /> :

                                        <AiOutlineHeart className="ml-3 w-8 h-8 stroke-red-500 stroke-2" type="submit" onClick={() => {
                                            handleFavorite(film)
                                        }} />}
                                </div>
                            )
                            :
                            <div>
                                <AiOutlineHeart onClick={() => setSignInError('Please sign in to favorite movies.')} />
                                <p className='error'>{signInError}</p>
                            </div>
                        }
                    </div>
                    <Card.Title style={{ color: "black" }} >{film.title}</Card.Title>
                    <Card.Text className="descrShorten">
                        {film.overview}
                    </Card.Text>
                    <Card.Text style={{ color: "black" }}>Price: $ {moviePrice}</Card.Text>
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