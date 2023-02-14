import { useState } from 'react'
import AddReview from '../Reviews/AddReview'
import { Link } from 'react-router-dom'
import MovieDetails from '../../Pages/MovieDetails'

function FilmList({ films, handleFavorite, handleDeleteFavorite, currentUser, favoritesArray, handleToggleFavorites, reviews, getReviews, postReviews, deleteReviews, userReview, setUserReview}) {

    let [signInError, setSignInError] = useState('')
    let alreadyFav = false
    const popfilms = films.map((film, idx) => {
        if (favoritesArray.includes(film.title)) {
            alreadyFav = true
        } else {
            alreadyFav = false
        }
        return (
            <div key={film.id}>
                <p>Title: {film.title}</p>
                <p>Description: {film.overview}</p>
                <p>Price: </p>
                <img src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`} alt={`Screenshot from the film ${film.title}`} className='pop-film-img' />
                <Link to={`/movies/${film.title}`} element={MovieDetails}>Movie Details</Link>
                {/* if there is a user, they can favorite/delete/review/add movies to watch list */}
                {currentUser ?
                    (
                        <div>
                            {/* conditional rendering of buttons based on if film is already a Fav */}
                            {alreadyFav ?

                                <button type="submit" onClick={() => {
                                    handleToggleFavorites(film.title, false)
                                    handleDeleteFavorite(film)
                                }}>Delete</button> :

                                <button type="submit" onClick={() => {
                                    handleToggleFavorites(film.title, true)
                                    handleFavorite(film)
                                }}>Add Favorite</button>}
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

export default FilmList;