import { useState, useEffect } from "react";
import HomeCarousel from "./FilmLists/HomeCarousel";
import PopularFilmList from './FilmLists/PopularFilmList'
import { Container } from "react-bootstrap";
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
    favoritesDetails
}) {

    console.log("favorites details in Homepage", favoritesDetails)
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
            { currentUser ?
            <FavoritesList 
                favoritesDetails={favoritesDetails}
                favoritesArray={favoritesArray}
                handleFavorite={handleFavorite}
                handleDeleteFavorite={handleDeleteFavorite}
                handleToggleFavorites={handleToggleFavorites}
                setMovieDetails={setMovieDetails}
            />
            : null
            }
        </>
    );
}

export default Homepage;