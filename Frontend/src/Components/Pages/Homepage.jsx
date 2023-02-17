import { useState, useEffect } from "react";
import HomeCarousel from "./FilmLists/HomeCarousel";
import PopularFilmList from './FilmLists/PopularFilmList'
import FavoritesList from "./FilmLists/FavoritesList";


function Homepage({ currentUser,
    films,
    handleFavorite,
    handleDeleteFavorite,
    favoritesArray,
    reviews,
    getReviews,
    postReviews,
    deleteReviews,
    setUserReview,
    userReview,
    signInError,
    setSignInError,
    setMovieDetails,
    getFilmsTMDB,
    getFavorites,
    moviePrice,
    handleAddToCart,
    handleDeleteFromCart,
    cartProducts
}) {
    
    console.log(moviePrice)
    useEffect(() => {
        getFilmsTMDB()
        getFavorites()
    }, [])

    return (
        <>
            <div>
                <HomeCarousel
                    currentUser={currentUser}
                    films={films}
                    setMovieDetails={setMovieDetails}
                />
            </div>
            <div className="homepage-title m-1 p-4 shadow-lg rounded">
                <h2>Browse the latest movies!</h2>
            </div>
            <div className="scrolling-container">
                <PopularFilmList
                    currentUser={currentUser}
                    films={films}
                    handleFavorite={handleFavorite}
                    handleDeleteFavorite={handleDeleteFavorite}
                    favoritesArray={favoritesArray}
                    reviews={reviews}
                    getReviews={getReviews}
                    postReviews={postReviews}
                    deleteReviews={deleteReviews}
                    setUserReview={setUserReview}
                    userReview={userReview}
                    signInError={signInError}
                    setSignInError={setSignInError}
                    setMovieDetails={setMovieDetails}
                    moviePrice={moviePrice}
                    handleAddToCart={handleAddToCart}
                    handleDeleteFromCart={handleDeleteFromCart}
                    cartProducts={cartProducts}
                />
            </div>
            {currentUser ?
            <>
            <div className="m-1 p-4 shadow-lg">
                <h2>Watch your favorites again!</h2>
            </div>
            <div className="scrolling-container">
                <FavoritesList
                    favoritesArray={favoritesArray}
                    handleFavorite={handleFavorite}
                    handleDeleteFavorite={handleDeleteFavorite}
                    setMovieDetails={setMovieDetails}
                />
            </div>
            </>
                : null
            }
        </>
    );
}

export default Homepage;