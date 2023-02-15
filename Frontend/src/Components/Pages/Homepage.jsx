import { useState, useEffect } from "react";

import PopularFilmList from './FilmLists/PopularFilmList'


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
    getFavorites
}) {

    useEffect(() => {
        getFilmsTMDB()
        getFavorites()
    }, [])

    return (
        <>
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
            />
        </>
    );
}

export default Homepage;