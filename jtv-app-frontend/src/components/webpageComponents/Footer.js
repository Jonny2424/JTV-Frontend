import React from 'react'
import { Navbar } from 'react-bootstrap';

export default function Footer() {
    return (
        <Navbar className="justify-content-space-between" fixed="bottom" bg="dark" style={{textAlign: "center", color: "white", justifyContent: "space-between"}}>
            <div>
                <h2>Jon Vaflor &copy; 2020</h2>
            </div>
            <div>
            <a href="https://www.facebook.com/JTV-Auto-Detailing-173222920002021/?view_public_for=173222920002021" target="_blank" style={{textDecoration: "none", color: "white", fontSize: "25px"}}>Facebook</a>
            </div>
        </Navbar>
    )
}
