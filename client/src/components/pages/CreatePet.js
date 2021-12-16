import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';

function CreatePet() {
    return (
        <>
            <h1 className="d-flex justify-content-center m-5">Add a New Pet</h1>
            <div className="d-flex justify-content-center m-5">
                <Form style={{backgroundColor: "white"}}>
                    <Form.Group className="m-3" controlid="formBasicPetName">
                        <FloatingLabel controlid="floatingInput" label="Pet Name" className="mb-3">
                            <Form.Control type="petName"/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="m-3">
                        <FloatingLabel controlid="floatingInput" label="Pet Type">
                            <Form.Control type="petType"/>
                            {/* <Form.Select aria-label="Default select example">
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Bird">Bird</option>
                                <option value="Guinea Pig">Guinea Pig</option>
                                <option value="Snake">Snake</option>
                                <option value="Turtle">Turtle</option>
                                <option value="Bearded Dragon">Bearded Dragon</option>
                                <option value="Hamster">Hamster</option>
                                <option value="Gerbil">Gerbil</option>
                                <option value="Fish">Fish</option>
                                <option value="Turtle">Turtle</option>
                                <option value="Rabbit">Rabbit</option>
                                <option value="Chinchilla">Chinchilla</option>
                                <option value="Other">Other</option>
                            </Form.Select> */}
                        </FloatingLabel>
                    </Form.Group >
                    <Form.Group className="m-3">
                        <FloatingLabel controlid="floatingSelect" label="Date of Birth">
                            <Form.Control type="date" />
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

export default CreatePet;