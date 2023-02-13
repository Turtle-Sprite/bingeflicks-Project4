function FilmList({films}) {
    
    console.log(films)
    const popfilms = films.map((film, idx) =>{
        return (
            <div>
                <p>{film.title}</p>
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