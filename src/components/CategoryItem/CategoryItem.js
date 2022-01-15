import React, {useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';

const CategoryItem = ({categoryItem}) => {
    return (
        <>
        <Row as = {NavLink} to={`categorias/${categoryItem.id}`} className='mt-3'>
            <Col >
                <Card className='bg-dark text-white mt-6 CatergoryItem_image'>
                    <Card.Img src={categoryItem.pictureURL} alt="Image"/>
                    <Card.ImgOverlay>
                        <Card.Title className= 'display-6'>{categoryItem.title}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
    
            </Col>
        </Row>
        </>
        )
}

export default CategoryItem;