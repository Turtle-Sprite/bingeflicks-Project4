import { useEffect } from "react";
import { Card } from "react-bootstrap";

function GetReview({ movieDetails, reviews, getReviews}) {
  
    let allreviews = []
    useEffect(()=> {
        getReviews(movieDetails.title)
    },[])

    if(reviews.length > 0) {
        allreviews = reviews.map((review, idx) =>{
            return (
                <Card key={idx} className="mx-5" style={{ color: "slategrey", textAlign: "center" }}>
                <div>
                    <h4>{review.title}</h4>
                    <h6>{review.content}</h6>
                    <h4>{review.rating}</h4>
                </div>
                </Card>
            )
        })
    }

    return (
        <div>
            {allreviews ? allreviews : "No reviews yet! Be the first to share your thoughts."}
        </div>
    );
}

export default GetReview;