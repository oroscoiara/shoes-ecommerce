import React from 'react';
import {useCartContext} from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons';
const ItemCart = ({name, price, id, quantity}) => {
    const {removeItem} = useCartContext();
    const handleRemove = () => removeItem(id);

    return (
        
            <tr>
                <td> {name}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td> 
                    <FontAwesomeIcon icon={faMinus} onClick={handleRemove}/>
               </td>
           </tr>
        
    )
}

export default ItemCart;