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
        <div>
        <p>{review.review_body}</p>
        <p>{review.designer}</p>
        <img src={review.review_img_url} alt=""></img>
        <p>Created at: {review.created_at}</p>
        <p>Votes: {review.votes}</p>
        </div>
    );
};

export default Reviews;