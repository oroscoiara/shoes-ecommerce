import React from 'react';
import "../CartWidget/CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => (
    <>
      <FontAwesomeIcon icon={faShoppingCart} />  
    </>

    );


export default CartWidget;