import React from 'react';
import {NavLink} from 'react-router-dom';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';

//acá va la card del producto

const Item = ({item}) => (
    
        <Col>
        <Card>
            <Card.Header className = 'text-muted fs-6'>
                {item.category}
            </Card.Header>
            <Card.Img variant='top' src={item.pictureURL}/>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
            </Card.Body>
        </Card>
        </Col>
)

export default Item;