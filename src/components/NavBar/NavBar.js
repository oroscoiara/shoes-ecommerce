import React from 'react';
import '../NavBar/NavBar.css';


import CartWidget from '../CartWidget/CartWidget';

export const NavBar = () => {
    return(
        
        <div className='containerNav'>
        <h1>ShowShoe</h1>
        <ul className='nav'>
            <li><a href= '#'>Home </a></li>
            <li><a href= '#'>Productos </a>
         

            </li>
            <li><a href= '#'>Contacto</a></li>
            <li><a href= '#'>Cómo comprar </a></li>
            <li><CartWidget /></li>
        </ul>
        
        
        </div>
    
    )
}