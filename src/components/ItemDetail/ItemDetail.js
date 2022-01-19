import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = (( {item}) => {


    const {setCart, addItem} = useCartContext();

    const onAdd = (count) => {
        setCart(count);
        addItem(item,count);
    }


    return (

        <Container jey={item.id} className='mt-4 mb-4'>
            <Row  >
                <Col xs lg='6'>
                    <Image src={item.pictureURL} width="400px" height="300" border= "3px solid transparent"/>
                </Col>
                <Col xs lg='6' >
                    <h3 >{item.title}</h3>
                    <p>{item.description}</p>
                    <p>$ {item.price}</p>
                    <p>{item.category}</p>
                </Col>
            </Row>
            <ItemCount stock={item.stock} onAdd={onAdd}/>
            
        </Container>
    );
})

export default ItemDetail;