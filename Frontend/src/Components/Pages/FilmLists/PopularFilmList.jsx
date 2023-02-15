import { Link } from "react-router-dom"
// import { CartContext } from "../../context/CartContext"
// import { useContext, useState } from "react"
import { useState } from "react"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function PopularFilmList({ films, handleFavorite, handleDeleteFavorite, currentUser, favoritesArray, handleToggleFavorites, reviews, signInError, setSignInError, setRenderMovieDetails, setMovieDetails, handleAddToCart, cart, handleDeleteFromCart}) {
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
            <div className=" " key={film.id}>
                <p>Title: {film.title}</p>
                <p>Description: {film.overview}</p>
                <p>Price: {moviePrice} </p>
                <img src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`} alt={`Screenshot from the film ${film.title}`} className='pop-film-img' />
                <Link to={`/movies/${film.title}`}>
                    <button type="submit" onClick={() => {setMovieDetails(film)}}>See Movie Details</button>
                </Link>
                {/* render button if in cart, or not in cart */}
                {/* {inCart ? */}
                {/* // <button onClick={deleteFromCart}>Delete from Cart</button> :
                // <button onClick={addOneToCart}>Add to cart</button>} */}
                {/* if there is a user, they can favorite/delete/review/add movies to watch list */}
                {currentUser ?
                    (
                        <div>
                            {/* conditional rendering of buttons based on if film is already a Fav */}
                            {alreadyFav ?

                                <AiFillHeart className="w-8 h-8 fill-red-500" type="submit" onClick={() => {
                                    handleToggleFavorites(film.title, false)
                                    handleDeleteFavorite(film)
                                }} />:

                                <AiOutlineHeart className="w-8 h-8 stroke-red-500 stroke-2" type="submit" onClick={() => {
                                    handleToggleFavorites(film.title, true)
                                    handleFavorite(film)
                                }} />}
                        </div>)
                        : 
                    <div>
                        <button disabled onClick={() => setSignInError('Please sign in to favorite your movies.')}>Add Favorite</button>
                        <p className='error'>{signInError}</p>
                    </div>
                    }
            </div>
        )
    })


    return (
        <div>
            {popfilms}
        </div>
    );
}

export default PopularFilmList;