import { useEffect, useState  } from "react";
import { getCategories } from '../utils/api'
import { Link } from 'react-router-dom';

const Nav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
            setCategories(categoriesFromApi);
        })
    }, []);
    return (
       <nav className='Nav'>
           {categories.map((category) => {
               return(
                   <Link to={`/categories/${category.slug}`} key={category.slug}>
                       {category.description}
                   </Link>
               )
           })}
       </nav>
    );
};

export default Nav;