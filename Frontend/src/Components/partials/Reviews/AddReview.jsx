function AddReview({ currentUser, postReviews, setUserReview, userReview }) {
    return (
        <>
            <form onSubmit={postReviews}>
                <input type='text' value={userReview.title} onChange={e => setUserReview({title: e.target.value})}/>
                <button type='submit'>Add Review</button>
            </form>
        </>
    );
}

export default AddReview;