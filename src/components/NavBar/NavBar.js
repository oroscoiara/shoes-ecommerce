import React from 'react';
import '../NavBar/NavBar.css';
import { Navbar,  Nav, NavDropdown, Container } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import MockedCategories from '../Mock/MockedCategories';

const NavBar = () => (
   <>
    <Navbar className="nav-border-gradiente"  bg="dark">
    <Container>
       <Nav.Link as={NavLink} exact to="/" >
        <h1>OhMyShoes</h1>
        </Nav.Link>      
    <Navbar.Toggle aria-controls="basic-navbar-nav" />   
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link className="text-white" as={NavLink} exact to="/">Productos</Nav.Link>
        <NavDropdown title="Categorias" className="text-white">
            { MockedCategories.map((mockedCategory,index) =>{
                return(
                    <NavDropdown.Item as={NavLink} to={`/categorias/${mockedCategory.id}`}>
                        {mockedCategory.title}
                    </NavDropdown.Item>
                )
            })}
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} exact to="/">Ver todos</NavDropdown.Item>

        </NavDropdown>
    </Nav>
    <Nav>
        <Nav.Link as={NavLink} to='/cart' className="text-white" href="#">
            <CartWidget />
        </Nav.Link>
    </Nav>
    </Navbar.Collapse>
   </Container>
   
   </Navbar>
   </>
   
);

export default NavBar;