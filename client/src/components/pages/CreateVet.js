import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';

function CreateVet() {
    return (
        <>
            <h1 className="d-flex justify-content-center m-5">Add a new vet visit</h1>
            <div className="d-flex justify-content-center m-5">
                <Form style={{backgroundColor: "white"}}>
                    <Form.Group className="m-3">
                        <FloatingLabel controlid="floatingSelect" label="Date of Visit">
                            <Form.Control type="date" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="m-3" controlid="formBasicPetName">
                        <FloatingLabel controlid="floatingInput" label="Select Pet" className="mb-3">
                            <Form.Select aria-label="Default select example">
                                <option value="Ginny">Ginny</option>
                                <option value="Buddy">Buddy</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="m-3">
                        <FloatingLabel controlid="floatingInput" label="Summary of Visit" className="mb-3">
                            <Form.Control type="summary" />
                        </FloatingLabel>
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