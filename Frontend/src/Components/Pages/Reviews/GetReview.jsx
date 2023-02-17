import { useEffect } from "react";
import { Card } from "react-bootstrap";

function GetReview({ movieDetails, reviews, getReviews}) {
  
    let allreviews = []
    useEffect(()=> {
        getReviews(movieDetails.title)
    },[])

    if(reviews.length > 0) {
        allreviews = reviews.map((review) =>{
            return (
                <Card className="mx-5" style={{ maxWidth: "350px", color: "slategrey", maxHeight: "350px", overflow: "scroll" }}>
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