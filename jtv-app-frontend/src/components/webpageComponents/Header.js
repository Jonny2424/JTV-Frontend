import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function header() {
    return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/" style={{fontSize: "30px", fontWeight: "bold"}}>[ JTV ] Auto Detailing</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="packages" style={{fontSize: "25px"}}>Packages</Nav.Link>
                    <Nav.Link href="aboutus" style={{fontSize: "25px"}}>About Us</Nav.Link>
                    <Nav.Link href="contact" style={{fontSize: "25px"}}>Contact</Nav.Link>
                </Nav>
            </Navbar>
    )
}