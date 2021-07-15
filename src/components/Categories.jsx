import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategories, getReviews } from '../utils/api'
import { Link } from "react-router-dom";


const Category = () => {
    const { slug } = useParams();
    const [categories, setCategories] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      getCategories().then((categoriesFromApi) => {
        setCategories(categoriesFromApi.filter(category => category.slug === slug));
      })
    }, [slug]);
    

    useEffect(() => {
      getReviews().then((reviewsFromApi) => {
          setReviews(reviewsFromApi.filter(review => review.category === slug));
      })
  }, [slug]);

    return (
      <main>
        <h1>{slug} games</h1>
        <ul>
          {categories.map((category) => {
            return (
                <ul key={category.slug}>
                    <p>{category.description}</p>
                </ul>
            );
          })}
        </ul>
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review) => {
            return (
                <li key={review.review_id}>
                   <Link to={`/reviews/${review.review_id}`} >
                   {review.title}
                   </Link>
                </li>
            );
          })}
        </ul>
       
      </main>
    );

    
  };
  
  export default Category;