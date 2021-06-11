import {
    CURRENT_USER,
    FAIL_USER,
    LOAD_USER,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    EDIT_USER_BYID,
    GET_USERS,
    GET_USER,
} from "../constants/user";

const initialState = {
    users: [],
    user: {},
    errors: [],
    isAuth: false,
    load: false,
    isAdmin: "",
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, load: true };
        case REGISTER_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                user: payload.user,
                load: false,
                isAuth: true,
                isAdmin: payload.user.role,
            };
        case FAIL_USER:
            return { ...state, errors: payload, load: false };

        case CURRENT_USER:
            return { ...state, user: payload.user, isAuth: true };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...state, user: {}, isAuth: false };

        case EDIT_USER_BYID:
            return {
                ...state,
                user: payload.user,
                isAuth: true,
            };
        case "VIDE_ERRORS":
            return { ...state, errors: [] };
        case GET_USERS:
            return { ...state, users: payload };
        case GET_USER:
            return { ...state, user: payload };
        default:
            return state;
    }
};

export default userReducer;
