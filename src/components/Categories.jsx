import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCategories } from '../utils/api'

const Category = () => {
    const { slug } = useParams();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then((categoriesFromApi) => {
            setCategories(categoriesFromApi.filter(category => category.slug === slug));
        })
    }, [slug]);
   
  
    return (
      <main>
        <h1>{slug} games</h1>
        <ul>
          {categories.map((category) => {
            return (
                <Link to={`/categories/${category.slug}`} key={category.slug}>{category.description}</Link>
            );
          })}
        </ul>
      </main>
    );
  };
  
  export default Category;