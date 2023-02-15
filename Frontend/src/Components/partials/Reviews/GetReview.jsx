import { useEffect } from "react";

function GetReview({ movieDetails, reviews, getReviews}) {
    
    useEffect(()=> {
        getReviews(movieDetails.title)
    },[])
    console.log("get review, reviews", reviews)
    // let allreviews = reviews.map((review) =>{
    //     return (
    //         <div>
    //             <h4>{review.title}</h4>
    //             <h6>{review.content}</h6>
    //             <h4>{review.rating}</h4>
    //         </div>
    //     )
    // })

    return (
        <div>

        </div>
    );
}

export default GetReview;