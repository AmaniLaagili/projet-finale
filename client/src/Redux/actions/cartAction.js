import axios from "axios";
import {
    LOAD_CART,
    FAIL_CART,
    ADD_TO_CART,
    ADD_TO_QUANTITY,
    Minus_TO_QUANTITY,
    DELETED_FROM_CART,
} from "../constants/cartConstants";
export const addToCart = (id, produit) => async (dispatch) => {
    dispatch({ type: LOAD_CART });
    try {
        let result = await axios.post("/api/cart", { id, produit });
        dispatch({ type: ADD_TO_CART, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_CART, payload: error.response.data.errors });
    }
};

export const AddToQty = (id, produit) => async (dispatch) => {
    dispatch({ type: LOAD_CART });
    try {
        let result = await axios.post("/api/cart/addtoqtity", { id, produit });
        dispatch({
            type: ADD_TO_QUANTITY,
            payload: result.data,
        });
    } catch (error) {
        dispatch({ type: FAIL_CART, payload: error.response.data.errors });
    }
};
export const MinusToQty = (id, produit) => async (dispatch) => {
    dispatch({ type: LOAD_CART });
    try {
        let result = await axios.post("/api/cart/demenutoqtity", {
            id,
            produit,
        });
        dispatch({
            type: Minus_TO_QUANTITY,
            payload: result.data,
        });
    } catch (error) {
        dispatch({ type: FAIL_CART, payload: error.response.data.errors });
    }
};
export const deletedToCart = (itemToremove) => async (dispatch) => {
    dispatch({ type: LOAD_CART });
    try {
        let result = await axios.post("/api/cart/deleteelement", itemToremove);
        dispatch({ type: DELETED_FROM_CART, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_CART, payload: error.response.data.errors });
    }
};
