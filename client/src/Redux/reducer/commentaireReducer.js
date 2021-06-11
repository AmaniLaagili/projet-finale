import {
    LOAD_COMMENTAIRE,
    FAIL_COMMENTAIRE,
    ADD_COMMENTAIRE,
} from "../constants/commentaireConstants";

const initialState = {
    commentaires: [],
    commentaire: {},
    load: false,
    error: null,
};

const commentaireReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_COMMENTAIRE:
            return { ...state, load: true };

        case FAIL_COMMENTAIRE:
            return { ...state, load: false, error: payload };
        case ADD_COMMENTAIRE:
            return {
                ...state,
                load: false,
            };

        default:
            return state;
    }
};
export default commentaireReducer;
