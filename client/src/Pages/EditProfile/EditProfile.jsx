import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../Redux/actions/user";
function EditProfile() {
    const user = useSelector((state) => state.userReducer.user);
    const [edittuser, setEdittuser] = useState({});

    const dispatch = useDispatch();
    const handleChange = (e) => {
        setEdittuser({ ...edittuser, [e.target.name]: e.target.value });
    };
    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editUser(user._id, edittuser, history));
    };
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="name" onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Envoyer
                </Button>
            </Form>
        </div>
    );
}

export default EditProfile;
