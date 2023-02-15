import { Link } from "react-router-dom"

function PopularFilmList({ films, handleFavorite, handleDeleteFavorite, currentUser, favoritesArray, handleToggleFavorites, reviews, signInError, setSignInError, setRenderMovieDetails, setMovieDetails}) {

    let alreadyFav = false

    //map through all films and make a simple film card with data. 
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
                <Link to={`/movies/${film.title}`}>
                    <button onClick={() => {setMovieDetails(film)}}>See Movie Details</button>
                </Link>
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

export default PopularFilmList;