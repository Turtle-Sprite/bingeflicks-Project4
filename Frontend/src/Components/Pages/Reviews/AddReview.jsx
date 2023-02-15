
function AddReview({ currentUser, postReviews, setUserReview, userReview, movieDetails }) {
    return (
        <>
            <form onSubmit={e => {postReviews(e)}}>
                <input type='text' value={userReview.title} 
                onChange={e => setUserReview({
                    title: e.target.value, 
                    content: userReview.content, 
                    rating: userReview.rating, 
                    movieTitle: movieDetails.title})}/>

                <input type='text' value={userReview.content} 
                onChange={e => setUserReview({
                    title: userReview.title,
                    content: e.target.value,
                    rating: userReview.rating, 
                    movieTitle: movieDetails.title})}/>

                <input type='text' value={userReview.rating} 
                onChange={e => setUserReview({
                    title: userReview.title,
                    content: userReview.content,
                    rating: e.target.value,
                    movieTitle: movieDetails.title})}/>

                <button type='submit'>Add Review</button>
            </form>
        </>
    );
}

export default AddReview;