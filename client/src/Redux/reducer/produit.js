import {
    LOAD_PRODUIT,
    FAIL_PRODUIT,
    GET_PRODUIT,
    POST_PRODUIT,
    PUT_PRODUIT,
    DELETE_PRODUIT,
    ADD_PRODUIT,
    GET_PRODUIT_BYID,
} from "../constants/produit";
const initialState = {
    produit: [],
    load: false,
    error: null,
    prodact: {},
};

const produitReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_PRODUIT:
            return { ...state, load: true };
        case FAIL_PRODUIT:
            return { ...state, load: false, error: payload };
        case GET_PRODUIT:
            return { ...state, produit: payload, load: false };
        case POST_PRODUIT:
            return { ...state, produit: payload, load: true };
        case PUT_PRODUIT:
            return { ...state, produit: payload, load: true };
        case DELETE_PRODUIT:
            return { ...state, produit: payload, load: true };
        case ADD_PRODUIT:
            return { ...state, produit: payload, load: true };
        case GET_PRODUIT_BYID:
            return { ...state, prodact: payload, load: false };
        default:
            return state;
    }
};
export default produitReducer;
