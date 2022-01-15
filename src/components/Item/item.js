import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import './item.css';
//acá va la card del producto

const Item = ({item}) => (
    
        <Col>
        <Card>
       
            <Card.Header className = 'text-muted fs-6'>
                {item.category}
            </Card.Header>
            <Card.Img variant='top' src={item.pictureURL} width= "40p0x" height= "300px" alt="imagen del producto" />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted Item__link " as={NavLink} to={`/items/${item.id}`}> 

                <small className="text-black">Ver màs</small>
            </Card.Footer>
        </Card>
        </Col>
)

export default Item;