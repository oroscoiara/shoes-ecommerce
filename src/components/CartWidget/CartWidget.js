import React from 'react';
import "../CartWidget/CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {useCartContext} from '../../context/CartContext';
import { Badge } from 'react-bootstrap';


const CartWidget = () => {
    
    const {cartWidgetItems} = useCartContext();  //me trae los values que tengo en el context
    return(
      <>

    
      <FontAwesomeIcon icon={faShoppingCart} />  
      {cartWidgetItems()>0 ? (
        <>
        <Badge bg="primary">{cartWidgetItems()}</Badge>
        </> ) : (
          null
        
      )}
    </>

    )};


export default CartWidget;