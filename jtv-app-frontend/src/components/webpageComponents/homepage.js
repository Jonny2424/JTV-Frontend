import React from 'react';
import Header from './Header';
import { Button, Jumbotron, Card, CardDeck } from 'react-bootstrap';

export default function homepage() {
    return (
        <>
            <Header />
            <div className="container">
                <Jumbotron>
                    <div className="inside-jumbotron">
                        <h1>Winter is Coming!</h1>
                        <p>
                            Have confidence knowing your car is protected during this winter season
                        </p>
                    </div>
                </Jumbotron>
            </div>
            <div className="card-container">
                <h1>Steps to a clean ride!</h1>
                <CardDeck>
                    <Card style={{ width: '18rem' }}>
                        <div className="card-step"><div className="holder">1</div></div>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '30px', fontWeight: 'bold' }}>Schedule</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <div className="card-step"><div className="holder">2</div></div>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '30px', fontWeight: 'bold' }}>Plan</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <div className="card-step"><div className="holder">3</div></div>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '30px', fontWeight: 'bold' }}>Enjoy your ride</Card.Title>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <Button style={{ marginTop: '50px'}} variant="outline-success" href="/contact">Schedule Now!</Button>
            </div>
        </>
    )
}
