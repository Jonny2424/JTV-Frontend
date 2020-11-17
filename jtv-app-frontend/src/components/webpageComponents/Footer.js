import React from 'react'
import { Navbar } from 'react-bootstrap';

export default function Footer() {
    return (
        <Navbar className="justify-content-center" fixed="bottom" bg="dark" style={{textAlign: "center", color: "white"}}>
            <div>
                <h2>Jon Vaflor &copy; 2020</h2>
            </div>
        </Navbar>
    )
}
