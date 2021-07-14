import { useEffect, useState  } from "react";
import { getCategories } from '../utils/api'
import { Link } from 'react-router-dom';

const Home = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
            setCategories(categoriesFromApi);
        })
    }, []);
    return (
        <ul>
           {categories.map((category) => {
               return(
                   <ul key={category.slug}>
                   <Link to={`/categories/${category.slug}`} >
                       {category.slug}
                   </Link>
                   </ul>
               )
           })}
      </ul>
    );
};

export default Home;