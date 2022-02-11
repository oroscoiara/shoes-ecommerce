import React from 'react';
import { useState } from 'react';
import {useCartContext} from '../../context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { NavLink } from 'react-router-dom';
import { Row, Button, Container, Col, Table, Modal, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faShoppingBasket, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import PaymentForm from '../PaymentForm/PaymentForm'
import './cart.css'

//muestra resumen de la compra, permite eliminar items, agregar más o vaciar todo el carrito.

const Cart = () => {
    const {cart, clearCart, cartWidgetItems, totalPrice} = useCartContext();

    const total = totalPrice();
    const [show, setShow]= useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
    <>
            <h1 className="justify-content-center" fontStyle="italic" color="black">Checkout</h1>
            <Container className="mt-4 mb-4">
                <Row className="justify-content-md-center my-4">
                    <Col xs lg="6" className="text-center mb-4">
                {cartWidgetItems() > 0 ? (
                    
                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                {cart.map((i) => (
                        
                                    <>
                                  
                                 <ItemCart key= {i.item.id} id={i.item.id} name = {i.item.title} price={i.item.price} quantity={i.quantity}/>
                                
                                </>
                                ))}
                                 
                                </tbody>
                        </Table>
                    
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
                    
                    <div className="justify-content-md-right my-4">Total: $ {total} </div>
                    <ButtonGroup className='mt-3' horizontal>
                        <div>
                            <Button className='mb-1' onClick={handleShow} variant="dark">
                                <FontAwesomeIcon icon={faShoppingBasket}/> Finalizar compra
                            </Button>
                        </div>
                        <div>
                            <Button className='mb-1' as={NavLink} exact to= "/" variant="dark">
                                <FontAwesomeIcon icon={faPlusCircle} />  Ver más productos
                            </Button>
                        </div>    
                        <div>    
                            <Button className='mb-1' onClick={clearCart} variant="dark">
                                <FontAwesomeIcon icon={faBan} /> Limpiar carrito
                            </Button>
                        </div>
                    </ButtonGroup>
                    
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Por favor, complete sus datos para continuar con la compra.</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <PaymentForm cart={cart} total={total} clearCart={clearCart} />
                        </Modal.Body>
                    </Modal>

                    </>
                )}
                </Col>
                </Row>
                </Container>
        </>
    )
}

export default Cart; 