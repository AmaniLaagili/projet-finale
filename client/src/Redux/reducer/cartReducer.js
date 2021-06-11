import {
    ADD_TO_CART,
    ADD_TO_QUANTITY,
    DELETED_FROM_CART,
    FAIL_CART,
    LOAD_CART,
    Minus_TO_QUANTITY,
} from "../constants/cartConstants";
const initialState = {
    errors: [],
    load: false,
    addedtocart: false,
    qtyModified: false,
    deletedCart: false,
};
const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_CART:
            return { ...state, load: true };
        case ADD_TO_CART:
            return { ...state, addedtocart: true, load: false };
        case FAIL_CART:
            return { ...state, errors: payload, load: false };
        case ADD_TO_QUANTITY:
            return { ...state, load: false, qtyModified: true };
        case Minus_TO_QUANTITY:
            return { ...state, load: false, qtyModified: true };

        case DELETED_FROM_CART:
            return { ...state, load: false, deletedCart: true };
        default:
            return state;
    }
};
export default cartReducer;
