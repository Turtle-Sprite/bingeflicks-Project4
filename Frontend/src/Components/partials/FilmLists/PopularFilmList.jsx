import {useState} from 'react'

function FilmList({films, handleFavorite, handleDeleteFavorite, currentUser, favoritesArray}) {
    const [alreadyFav, setAlreadyFav] = useState(false)
    
    // console.log("FilmList", favoritesArray)
    const popfilms = films.map((film, idx) =>{



    /////finding favorites to add filled or not filled hearts\\\\
    // const favTitles = favoritesArray.map(fav => {
    //         const movieTitle = fav.movieTitle
    //         return movieTitle
    //     })
    //     const boolean = favTitles.includes(film.title)
        // console.log(favTitles, "array fav titles boolean")
        // console.log(film.title, "currentMovies")
        // console.log(boolean, "boolean")
        return (
            <div key={film.title}>
                <p>Title: {film.title}</p>
                <p>Description: {film.overview}</p>
                <p>Price: </p>
                {/* if there is a user, they can favorite/delete movies */}
                {currentUser ? 
                (
                <div>
                <button type="submit" onClick={() => handleFavorite(film)}>Add Favorite</button>
                <button type="submit" onClick={() => handleDeleteFavorite(film)}>Delete</button>
                <button type="submit" onClick={() => handleAddToCart()}>Add to Cart</button> 
                </div>)
                : null}
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