import {
    LOAD_COMMENDE,
    FAIL_COMMENDE,
    ADD_COMMENDE,
} from "../constants/commendeConstants";

const initialState = {
    commende: [],
    load: false,
    error: null,
};

const commendeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_COMMENDE:
            return { ...state, load: true };

        case FAIL_COMMENDE:
            return { ...state, load: false, error: payload };
        case ADD_COMMENDE:
            return { ...state, produit: payload, load: true };

        default:
            return state;
    }
};
export default commendeReducer;
