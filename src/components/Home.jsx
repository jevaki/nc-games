import { useEffect, useState  } from "react";
import { getCategories, getReviews } from '../utils/api'
import { Link } from 'react-router-dom';
import Expandable from "./Expandable";

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
        <section>
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
        <ul>
            <Expandable name="All games reviews">
                <button className="shorted_by_button">shorted by</button>
            {reviews.map((review) => {
                return (
                    <li key={review.review_id}>
                        <Link to={`/reviews/${review.review_id}`} >
                        {review.title}
                        </Link>
                    </li>
                )
            })}
            </Expandable>
        </ul>
        </section>
    );
};

export default Home;