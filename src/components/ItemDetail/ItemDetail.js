import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const ItemDetail = (( {item}) => {

    return (

        <Container className='mt-4 mb-4'>
            <Row>
                <Col xs lg='4'>
                    <Image src={item.pictureURL} fluid/>
                </Col>
                <Col xs lg='6'>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>$ {item.price}</p>
                    <p>{item.category}</p>
                </Col>
            </Row>
            
        </Container>
    );
})

export default ItemDetail;