import { useEffect, useState  } from "react";
import { getCategories, getReviews } from '../utils/api'
import { Link } from 'react-router-dom';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
            setCategories(categoriesFromApi);
        })
    }, []);

    useEffect(() => {
        getReviews().then((reviewsFromApi) => {
            setReviews(reviewsFromApi);
        })
    }, []);

    return (
        <div>
        <nav className="Nav">
           {categories.map((category) => {
               return (
                   <ul key={category.slug}>
                   <Link to={`/categories/${category.slug}`} >
                       {category.slug}
                   </Link>
                   </ul>
               )
           })}
        </nav>
        <button>All games reviews</button>
        <ul>
            {reviews.map((review) => {
                return (
                    <li key={review.review_id}>
                        <Link to={`/reviews/${review.review_id}`} >
                        {review.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </div>
       
    );
};

export default Home;