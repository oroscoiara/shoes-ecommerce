import React from 'react';
import {useCartContext} from '../../context/CartContext';
import { Row, Col } from 'react-bootstrap';

const ItemCart = ({name, price, pictureURL, id, quantity}) => {
    const {removeItem} = useCartContext();
    const handleRemove = () => removeItem(id);

    return (
        <>
        <Row xs={2} md={4} lg={6}>
            <Col xs lg="6">
                <h2> {name}</h2>
                <h2>Precio: ${price}</h2>
            
                <h2>Cantidad: {quantity}</h2>
            </Col>
            <Col xs lg="2">
                <button onClick={handleRemove}>
                    Eliminar
                </button>
            </Col>
        </Row>

        </>
    )
}

export default ItemCart;