import { useState, useEffect } from "react";
import HomeCarousel from "./FilmLists/HomeCarousel";
import PopularFilmList from './FilmLists/PopularFilmList'
import FavoritesList from "./FilmLists/FavoritesList";
import { Card, Button, Container } from "react-bootstrap";


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
            <Container>
            <div className="homepage-title mt-3 m-1 p-4 shadow-lg rounded">
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
            <div className="homepage-title mt-3 m-1 p-4 shadow-lg rounded">
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
            </Container>
        </>
    );
}

export default Homepage;