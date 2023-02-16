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
    getFavorites
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
                />
            </div>

            <div className="flexContainer">
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
            </div>
            {currentUser ?
            <>
                <h2>Watch your favorites again!</h2>
                <FavoritesList
                    favoritesArray={favoritesArray}
                    handleFavorite={handleFavorite}
                    handleDeleteFavorite={handleDeleteFavorite}
                    handleToggleFavorites={handleToggleFavorites}
                    setMovieDetails={setMovieDetails}
                    
                />
            </>
                : null
            }
        </>
    );
}

export default Homepage;