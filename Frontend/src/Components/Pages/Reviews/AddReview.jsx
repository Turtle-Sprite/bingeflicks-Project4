import { Form, Col, Row, Container } from 'react-bootstrap';

function AddReview({ currentUser, postReviews, setUserReview, userReview, movieDetails }) {
    return (
        <>
        <Container>
        <Col sm={12} md={6} lg={5}>
            <Form onSubmit={e => {postReviews(e)}}>
            <Form.Label>Review Title: </Form.Label>
                <Form.Control type='text'  placeholder='My favorite!' value={userReview.title} 
                onChange={e => setUserReview({
                    title: e.target.value, 
                    content: userReview.content, 
                    rating: userReview.rating, 
                    movieTitle: movieDetails.title})}/>
                <Form.Label>Review Content</Form.Label>
                <Form.Control  as="textarea" type='text' placeholder='This movie was great!' value={userReview.content} 
                onChange={e => setUserReview({
                    title: userReview.title,
                    content: e.target.value,
                    rating: userReview.rating, 
                    movieTitle: movieDetails.title})}/>

                <Form.Label>Movie Rating (1-5)</Form.Label>
                <Form.Control type='text' value={userReview.rating} 
                onChange={e => setUserReview({
                    title: userReview.title,
                    content: userReview.content,
                    rating: e.target.value,
                    movieTitle: movieDetails.title})}/>

                <button type='submit'>Add Review</button>
            </Form>
            </Col>
            </Container>
        </>
    );
}

export default AddReview;