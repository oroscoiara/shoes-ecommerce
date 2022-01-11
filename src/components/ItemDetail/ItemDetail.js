import React from 'react';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

const ItemDetail = ({item}) => {

    return (

        <Container className='mt-4 mb-4'>
            <Row>
                <Col xs lg='4'>
                    <Image src={item.pictureURL} fluid />
                </Col>
                <Col xs lg='g'>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </Col>
            </Row>
            
        </Container>
    );
}

export default ItemDetail