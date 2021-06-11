import axios from "axios";
import {
    LOAD_USER,
    REGISTER_USER,
    FAIL_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
    EDIT_USER_BYID,
    GET_USERS,
    GET_USER,
} from "../constants/user";
export const register = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/register", user);

        dispatch({ type: REGISTER_USER, payload: result.data });
        history.push("/profile");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/login", user);
        dispatch({ type: LOGIN_USER, payload: result.data });
        history.push("./profile");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};

export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        let result = await axios.get("/api/user/current", config);
        dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
        // dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};

export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};

export const videErrors = () => {
    return {
        type: "VIDE_ERRORS",
    };
};
export const editUser = (id, newUser, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.put(`/api/user/${id}`, newUser);
        dispatch({ type: EDIT_USER_BYID, payload: result.data });
        dispatch(current());
        history.push("/profile");
    } catch (error) {
        console.log("error", error);
        dispatch({ type: FAIL_USER, payload: error.data });
    }
};

export const getUsers = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.get("/api/user/users");
        dispatch({ type: GET_USERS, payload: result.data.users });
    } catch (error) {
        console.log("error", error);
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};

//delete user
export const deleteUser = (id) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.delete(`/api/user/delete/${id}`);
        dispatch({ type: GET_USER, payload: result.data.user });
        dispatch(current());
    } catch (error) {
        console.log("error", error);
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};
