import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import './item.css'
//acá va la card del producto

const Item = ({item}) => {
    return (
        <Card className="cardCatalogo">
            <Link to={`/items/${item.id}`} >
                <Card.Img variant="top" src={`${item.pictureURL}`} className="pictureURL" />
                <Card.Body>
                    <Card.Title><b>{item.title}</b></Card.Title>
                    <hr />
                    <Card.Text className="mb-2 text-muted"> {item.description}</Card.Text>
                    <Card.Text>${item.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted Item__link "> 
                    <small >Ver más</small>
                </Card.Footer>      
            </Link>
        </Card>
    )}
    export default Item;

