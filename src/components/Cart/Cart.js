import React from 'react';
import {useCartContext} from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { NavLink } from 'react-router-dom';
import { Row, Button, Container, Card, Col } from 'react-bootstrap';

const Cart = () => {
    const {cart, clearCart, cartWidgetItems, totalPrice} = useCartContext();
    const total = totalPrice();

    return(
        <>
            <Container className="mt-4 mb-4">
                {cartWidgetItems() > 0 ? (
                    cart.map((i) => (
                        <>
                        
                        <ItemCart key= {i.item.id} id={i.item.id} name = {i.item.title} price={i.item.price} quantity={i.quantity}/>
                        </>
                    ))
                ) : (
                    <>
                    <Row className="justify-content-md-center my-4">
                        <Col xs lg="6" className="text-center mb-4">
                            <h3>Elegí un producto para agregar a tu carrito</h3>
                        </Col>
                    </Row>
                    </>
                )}

                {cartWidgetItems()>0 && (
                    <>

                    <h4>Total: $ {total} </h4>
                    <Button as={NavLink} exact to='/'>Ver más productos</Button>

                    <Button onClick={clearCart}>Limpiar carrito</Button>
                    </>
                    )}
            </Container>
        </>
    )
}

export default Cart; 