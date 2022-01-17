import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const ItemDetail = (( {item}) => {

    return (

        <Container className='mt-4 mb-4'>
            <Row>
                <Col xs lg='6'>
                    <Image src={item.pictureURL} width="400px" height="300" border= "5px solid transparent"/>
                </Col>
                <Col xs lg='6'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>$ {item.price}</p>
                    <p>{item.category}</p>
                </Col>
            </Row>
            
        </Container>
    );
})

export default ItemDetail;