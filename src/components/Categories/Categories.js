import React, {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import MockedCategories from '../Mock/MockedCategories';

const Categories = ({category}) => {
    return (
        <NavLink key={category.id} activeClassName="activeClass" className="categoryTag" to={category.address}>{category.title}</NavLink>
    )
}

export default Categories