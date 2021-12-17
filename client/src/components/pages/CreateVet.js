import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';

function CreateVet() {
    return (
        <>
            <h1 className="d-flex justify-content-center m-5">Add a new vet visit</h1>
            <div className="d-flex justify-content-center m-5">
                {/* TO DO: Create custom hook for media screen to adjust width of form in mobile */}
                <Form style={{backgroundColor: "white", width: "40%"}}>
                    <Form.Group className="m-3">
                        <FloatingLabel controlid="floatingSelect" label="Date of Visit">
                            <Form.Control type="date" />
                        </FloatingLabel>
                    </Form.Group>
                    {/* TO DO: Map over pets in database for form select options */}
                    <Form.Group className="m-3" controlid="formBasicPetName">
                        <FloatingLabel controlid="floatingInput" label="Select Pet" className="mb-3">
                            <Form.Select aria-label="Default select example">
                                <option value="Ginny">Ginny</option>
                                <option value="Ari">Ari</option>
                                <option value="Tonks">Tonks</option>
                                <option value="Ted">Ted</option>
                                <option value="Ellie">Ellie</option>
                                <option value="Oskar">Oskar</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="m-3">
                        <Form.Label>Weight (in pounds)</Form.Label>
                        <NumericInput 
                            mobile
                            size={6}
                            className="form-control"
                            min={0} 
                            value={50}
                            style={{
                                wrap: {
                                    width: '20%'
                                }
                            }}
                        />                    
                    </Form.Group>
                    <Form.Group className="m-3" controlid="exampleForm.ControlTextarea1">
                        <Form.Label>Summary of Visit</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="m-3">
                        <Form.Label>Check all vaccines your pet received</Form.Label>
                        <Form.Check label="Rabies"/>
                        <Form.Check label="Bordetella"/>
                        <Form.Check label="DA2PP (Core)"/>
                        <Form.Check label="Leptospirosis"/>
                        <Form.Check label="Lyme"/>
                        <Form.Check label="FVRCP (Core)"/>
                        <Form.Check label="FeLV"/>
                    </Form.Group>
                    <Button variant="secondary"type="submit" className="m-3">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default CreateVet;