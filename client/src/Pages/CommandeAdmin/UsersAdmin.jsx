import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { getUsers } from "../../Redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import UsersAdminCard from "./UsersAdminCard";
function UsersAdmin() {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.userReducer.users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);
    return !users ? (
        <h1>loading</h1>
    ) : (
        <div>
            {users.map((user, index) => (
                <UsersAdminCard user={user} key={index} />
            ))}
        </div>
    );
}

export default UsersAdmin;
