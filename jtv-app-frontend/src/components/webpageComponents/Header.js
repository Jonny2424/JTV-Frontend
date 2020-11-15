import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'


export default function header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">[ JTV ] Auto Detailing</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="detailing">Detailing</Nav.Link>
                    <Nav.Link href="aboutus">About Us</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
