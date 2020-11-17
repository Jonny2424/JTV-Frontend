import React from 'react';
import Header from './Header';
import CreateRequestForm from '../CreateRequestForm';

export default function ContactUs() {
    return (
        <>
            <Header />
            <div className="contact-container">
                <div className="map-container">
                <div className="map-holder">
                    <img src="https://i.imgur.com/Ti5wYZe.png" style={{borderRadius: "6px"}}></img>
                </div>
                <div>
                    <h2 style={{textAlign: "left", textDecoration: "underline"}}>Radius Circles</h2>
                    <ul style={{textAlign: "left"}}>
                        <li>Red: 10 miles * extra fee</li>
                        <li>Yellow: 5 miles</li>
                        <li>Green: 2.5 miles</li>
                    </ul>
                </div>
                </div>
                <CreateRequestForm />
            </div>


        </>
    )
}
