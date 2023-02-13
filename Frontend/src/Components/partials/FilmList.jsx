function FilmList({films, handleFavorite}) {
    
    const popfilms = films.map((film, idx) =>{
        return (
            <div key={film.title}>
                <p>{film.title}</p>
                <button type="submit" onClick={() => handleFavorite(film)}>Add Favorite</button>
            </div>
        )
    }) 
    return ( 
        <div>
            Films tbd
            {popfilms}
        </div>
     );
}

export default FilmList;