import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel({ films, currentUser }) {

  if(films.length > 0){
  const getFirstFour = films => {
    let fourFilms = []
    for(let i =0; i < 4; i++ ){
      const film = films[i] 
      fourFilms.push(
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`}
            alt={`${film.title}`}
          />
          <Carousel.Caption>
            <h3>{film.title}</h3>
            <p>{film.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    }
    console.log(fourFilms)
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