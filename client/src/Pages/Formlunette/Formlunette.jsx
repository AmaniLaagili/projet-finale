import React from "react";
import { Form, Button } from "react-bootstrap";
function Formlunette() {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Titre" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>PosterUrl</Form.Label>
                    <Form.Control type="Number" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Prix</Form.Label>
                    <Form.Control type="Number" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>LDV</option>
                        <option>LDS</option>
                        <option>LENT</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Formlunette;
