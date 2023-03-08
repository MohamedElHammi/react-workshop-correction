import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
    const active = {
        textDecoration:'none'
    };
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>MyStore</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="products" style={({isActive}) => !isActive ? active : undefined}>Products</Nav.Link>
                    <Nav.Link as={NavLink} to="/products/add" style={({isActive}) => !isActive ? active : undefined}>Add New Product</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
