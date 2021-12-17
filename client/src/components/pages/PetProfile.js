import React from 'react';
import Ginny from '../../images/ginny.jpg';
import { Card } from 'react-bootstrap';


function PetProfile() {
    return (
        <>
            {/* TO DO: Change to reflect pet id in params and get info from database */}
            <h1 className="d-flex justify-content-center p-4">Ginny</h1>
            <div className="row">
                <img src={Ginny} style={{width: "30%", border: "1rem solid white"}} className="m-5" />
                <Card className="col-6">
                    <Card.Body>
                        Type: Dog <br></br>
                        Date of Birth: August 21st, 2016 <br></br>
                        Breed: Shepherd Mix
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default PetProfile;