import { useEffect, useState } from "react";
import CategoryList from '../components/CategoryList/CategoryList';
import Categories from '../components/Categories/Categories';
import {useParams} from 'react-router-dom';

const CategorySelector = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoryPromise = new Promise ((res, rej) => {
            res(Categories)
        })
        categoryPromise.then((res) => setCategories(res))
    },[categories])

    return(
        <CategoryList categories={categories} />
    )
};

export default CategorySelector