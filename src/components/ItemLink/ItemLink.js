import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const HomeCategories = [
    {catId:1, name: "Home", route:"/"},
    {catId:2, name: "Products", route:"/products"},
    {catId:3, name: "Contact", route:"/contact"},
    {catId:4, name: "ComoComprar", route:"/comocomprar"}
];

const ItemLink = () => {
    const [homeCategories, setHomeCategories] = useState([])
    useEffect(() => {
        const promesaCat = new Promise ((res,rej) =>{
            res(HomeCategories);

        });
        promesaCat.then((res) => setHomeCategories(res))
    },[]);
    return(
        <>
        {homeCategories.map((category) => {
            return(
                <li key={category.catId} className="item">
                    <Link to={category.route} >{category.name}</Link>
                
                </li>
            )
        })}
        </>
    )
}

export default ItemLink