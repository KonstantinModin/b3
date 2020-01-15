import React from "react";
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from './logo.png';

const NavBarMain = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light" fixed="top">
            <Navbar.Brand href="#home"><img src={logo} height="26" alt="logo"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Button>Log in</Button>
                </Nav>                
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBarMain;
