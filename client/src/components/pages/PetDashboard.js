import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Ginny from '../../images/ginny.jpg';
import Ari from '../../images/ari.jpg';
import Tonks from '../../images/tonks.jpg';
import Ted from '../../images/ted.jpg';
import Ellie from '../../images/ellie.jpg';
import Oskar from '../../images/oskar.jpg';

function PetDashboard() {
    return (
        <>
        {/* Map over card for pets */}
            <div className="row">
                <Card className="m-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Ginny} />
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-center">Ginny</Card.Title>
                        <div className="d-flex justify-content-center">
                            <Button href="/pet-profile" variant="secondary">View Pet Profile</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="m-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Ari} />
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-center">Ari</Card.Title>
                        <div className="d-flex justify-content-center">
                            <Button href="/pet-profile" variant="secondary">View Pet Profile</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="m-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Tonks} />
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-center">Tonks</Card.Title>
                        <div className="d-flex justify-content-center">
                            <Button href="/pet-profile" variant="secondary">View Pet Profile</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="m-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Ted} />
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-center">Ted</Card.Title>
                        <div className="d-flex justify-content-center">
                            <Button href="/pet-profile" variant="secondary">View Pet Profile</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="m-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Ellie} />
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-center">Ellie</Card.Title>
                        <div className="d-flex justify-content-center">
                            <Button href="/pet-profile" variant="secondary">View Pet Profile</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="m-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Oskar} />
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-center">Oskar</Card.Title>
                        <div className="d-flex justify-content-center">
                            <Button href="/pet-profile" variant="secondary">View Pet Profile</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default PetDashboard;