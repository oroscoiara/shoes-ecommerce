import React, {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import CartWidget from '../CartWidget/CartWidget';

const CategoryItem = ({categoryItem}) => {
    return (
        <>
        <Row as = {NavLink} to={`categoryItem.id}`} className='mt-3'>
            <Col >
                <Card className='bg-dark text-white mt-6 CatergoryItem_image'>
                    <Card.Title className= 'display-6'>{categoryItem.title}</Card.Title>
                </Card>
    
            </Col>
        </Row>
        </>
        )
}

export default categoryItem;