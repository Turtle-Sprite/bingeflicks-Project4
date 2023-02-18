import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'

function HomeCarousel({ films, currentUser, setMovieDetails }) {

  if(films.length > 0){
  const getFirstFour = films => {
    let fourFilms = []
    for(let i =0; i < 4; i++ ){
      const film = films[i] 
      fourFilms.push(
        <Carousel.Item key={i} onClick={() => setMovieDetails(film)}>
          <Link to={`/movies/${film.title}`}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`}
            alt={`${film.title}`}
          />
        </Link>
          <Carousel.Caption>
            <h3>{film.title}</h3>
            <p>{film.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    }
    return fourFilms
  }

  return (
    <>
      <Carousel fade>
        {getFirstFour(films)}
      </Carousel>
    </>);
}
}

export default HomeCarousel;