import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from '../utils/api'


const Reviews = () => {
    const [review, setReview] = useState([]);
    const { review_id } = useParams();

    useEffect(() => {
        getReviewsById(review_id).then((reviewFromApi) => {
            setReview(reviewFromApi);
        })
        .catch(err => {
            console.dir(err);
        })
    }, [review_id]);
    console.log(review);
    return (
        <p>{review.review_body}</p>
    //     <ul>
    //        {reviewsById.map((reviewById) => {
    //            return(
    //                <ul key={reviewById.review_id}>
    //                <p>{reviewById.review_body}</p>
    //                </ul>
    //            )
    //        })}
    //   </ul>
    );
};

export default Reviews;