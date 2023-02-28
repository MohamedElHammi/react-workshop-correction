import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export const NavigationBar = () => {
    let activeStyle = {
        textDecoration: "none",
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to="/products">MyStore</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="products" style={({ isActive }) => (!isActive ? activeStyle : undefined)}>Products</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
