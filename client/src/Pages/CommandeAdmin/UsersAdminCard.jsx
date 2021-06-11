import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { current, deleteUser } from "../../Redux/actions/user";

function UsersAdminCard({ user }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, []);
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Button
                                onClick={() => {
                                    dispatch(deleteUser(user._id));
                                    //reload
                                }}
                            >
                                Remove
                            </Button>
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default UsersAdminCard;
