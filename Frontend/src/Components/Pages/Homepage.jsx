import { useState, useEffect } from "react";
import HomeCarousel from "./FilmLists/HomeCarousel";
import PopularFilmList from './FilmLists/PopularFilmList'
import FavoritesList from "./FilmLists/FavoritesList";


function Homepage({ currentUser,
    films,
    handleFavorite,
    handleDeleteFavorite,
    favoritesArray,
    handleToggleFavorites,
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
    moviePrice
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
            <h2>Browse the latest movies!</h2>
            <div className="scrolling-container">
                <PopularFilmList
                    currentUser={currentUser}
                    films={films}
                    handleFavorite={handleFavorite}
                    handleDeleteFavorite={handleDeleteFavorite}
                    favoritesArray={favoritesArray}
                    handleToggleFavorites={handleToggleFavorites}
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
                />
            </div>
            {currentUser ?
            <>
            <h2>Watch your favorites again!</h2>
            <div className="scrolling-container">
                <FavoritesList
                    favoritesArray={favoritesArray}
                    handleFavorite={handleFavorite}
                    handleDeleteFavorite={handleDeleteFavorite}
                    handleToggleFavorites={handleToggleFavorites}
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