import { useEffect } from "react";

function GetReview({ movieDetails, reviews, getReviews}) {
  
    let allreviews = []
    useEffect(()=> {
        getReviews(movieDetails.title)
    },[])

    if(reviews.length > 0) {
        allreviews = reviews.map((review) =>{
            return (
                <div>
                    <h4>{review.title}</h4>
                    <h6>{review.content}</h6>
                    <h4>{review.rating}</h4>
                </div>
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