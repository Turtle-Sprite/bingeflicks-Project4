import { Link } from "react-router-dom"
import { AiOutlineHeart, AiFillHeart, AiFillPlusCircle } from "react-icons/ai";
import { Card } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PopularFilmList({ films, handleFavorite, handleDeleteFavorite, currentUser, favoritesArray, reviews, setSignInError, setMovieDetails, handleAddToCart, cartProducts, handleDeleteFromCart, moviePrice, signInError }) {
    const notify = (title) => toast(`${title} added to cart!`);
    // let inCart = false

    //map through all films and make aray of titles
    let responseArray = favoritesArray.map(response => {
        return response.movieTitle
    })
    //map through all films and make a simple film card with data. 
    const popfilms = films.map((film, idx) => {
        let alreadyFav = false
        //check if favorites or not
        if (responseArray.includes(film.title)) {
            alreadyFav = true
        } else {
            alreadyFav = false
        }

        return (
            <Card key={idx} style={{ maxWidth: "350px", color: "slategrey", maxHeight: "500px" }} className="m-3 mt-2 hover:opacity-3 cardScroll">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`} alt={`Screenshot from the film ${film.title}`} className='pop-film-img' />
                <Card.Body>
                    <div className="flexContainer">
                        <Link to={`/movies/${film.title}`}>

                            <button className="mr-9 my-2 self-start" type="submit" onClick={() => { setMovieDetails(film) }}>See Movie Details</button>
                        </Link>


                        {currentUser ?
                            (
                                <div>
                                    {alreadyFav ?
                                        <div>
                                            <AiFillHeart className="ml-3 w-10 h-10 fill-red-500" type="submit" onClick={() => {
                                                handleDeleteFavorite(film)
                                            }} />
                                            <div className="flexContainer items-baseline">
                                                <AiFillPlusCircle className=" w-8 h-8" onClick={() => {
                                                    notify(film.title)
                                                    handleAddToCart(film, 500)
                                                }} /> Cart
                                                <ToastContainer />
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <AiOutlineHeart className="ml-3 w-10 h-10 stroke-red-500 stroke-2" type="submit" onClick={() => {
                                                handleFavorite(film)
                                            }} />
                                            <div className="flexContainer items-baseline">
                                                <AiFillPlusCircle className="w-8 h-8" onClick={() => {
                                                    notify(film.title)
                                                    handleAddToCart(film, 500)
                                                }} /> Cart
                                                <ToastContainer />
                                            </div>
                                        </div>}
                                </div>
                            )
                            :
                            <div>
                                <div>
                                    <AiOutlineHeart className=" w-8 h-8" onClick={() => setSignInError('Please sign in to favorite movies.')} />
                                </div>
                                <p className='error'>{signInError}</p>
                            </div>
                        }
                    </div>
                    <Card.Title style={{ color: "black" }} >{film.title}</Card.Title>
                    <Card.Text className="descrShorten">
                        {film.overview}
                    </Card.Text>
                    <Card.Text style={{ color: "black" }}>Price: $ {moviePrice}</Card.Text>
                </Card.Body>
            </Card >)
    })

    return (
        <>
            {popfilms}
        </>
    );
}
export default PopularFilmList;