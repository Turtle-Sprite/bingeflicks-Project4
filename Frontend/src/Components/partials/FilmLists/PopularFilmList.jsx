import { useState } from 'react'

function FilmList({ films, handleFavorite, handleDeleteFavorite, currentUser, favoritesArray, handleToggleFavorites }) {
    let [signInError, setSignInError] = useState('')
    let alreadyFav = false
    const popfilms = films.map((film, idx) => {
        if (favoritesArray.includes(film.title)) {
            alreadyFav = true
        } else {
            alreadyFav = false
        }
        return (
            <div key={film.title}>
                <p>Title: {film.title}</p>
                <p>Description: {film.overview}</p>
                <p>Price: </p>
                <img src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`} alt={`Screenshot from the film ${film.title}`} className='pop-film-img' />
                {/* if there is a user, they can favorite/delete movies */}
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
                    : <button disabled onClick={() => setSignInError('Please sign in to favorite your movies.')}>Add Favorite</button>}

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