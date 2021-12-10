import React from 'react';
import "../CartWidget/CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function CartWidget() {
    return(
    
        <a href= '#'>
        <FontAwesomeIcon icon={faShoppingCart} />  
        </a>

    );
}

export default CartWidget;