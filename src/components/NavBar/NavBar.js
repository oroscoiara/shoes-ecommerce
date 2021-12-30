import React from 'react';
import '../NavBar/NavBar.css';
import { NavDropdown } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget';
import ItemLink from '../ItemLink/ItemLink';

export const NavBar = () => {
 
    return(
        
        <div className='containerNav'>
        <h1 className='mainName'>OhMyShoes</h1>
        <ul className='nav'>
           
            <ItemLink />
            <li><CartWidget /></li>
        </ul>
        
        
        </div>
    
    )
}