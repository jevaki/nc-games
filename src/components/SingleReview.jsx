import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getReviewsById,
  getComments,
  getVotes,
  updateVotes,
} from "../utils/api";
import Expandable from "./Expandable";

const SingleReview = () => {
  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(0);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewsById(review_id)
      .then((reviewFromApi) => {
        setReview(reviewFromApi);
      })
      .catch((err) => {
        console.log(err);
      });

    getVotes(review_id).then((votesFromApi) => {
      setVotes(votesFromApi);
    });

    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

  const incrementAndUpdateVotes = () => {
    updateVotes(review_id, 1).then(() => {
      setVotes((currSetVotes) => {
        return currSetVotes + 1;
      })
    })
  };

  return (
    <main>
      <ul>
        <img className="review_img" src={review.review_img_url} alt=""></img>
        <p>{review.review_body}</p>
        <p>{review.designer}</p>
        <p>Created at: {review.created_at}</p>
        <p>Votes: {votes}</p>
        <button onClick={() => incrementAndUpdateVotes()}>🗳️</button>
      </ul>
      <ul>
        <Expandable name="Comments">
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <p>{comment.body}</p>
              </li>
            );
          })}
        </Expandable>
      </ul>
    </main>
  );
};

export default SingleReview;
