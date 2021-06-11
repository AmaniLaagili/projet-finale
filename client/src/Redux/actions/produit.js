import axios from "axios";
import {
    LOAD_PRODUIT,
    FAIL_PRODUIT,
    GET_PRODUIT,
    POST_PRODUIT,
    PUT_PRODUIT,
    GET_PRODUIT_BYID,
    ADD_PRODUIT,
} from "../constants/produit";

export const getProduit = () => async (dispatch) => {
    dispatch({ type: LOAD_PRODUIT });

    try {
        let result = await axios.get("/api/produit");
        //console.log(result.data);
        dispatch({ type: GET_PRODUIT, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_PRODUIT, payload: error.response.data });
    }
};
export const postProduit = (produit) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUIT });

    try {
        let result = await axios.post("/api/produit", produit);
        dispatch({ type: POST_PRODUIT, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_PRODUIT, payload: error.response.data });
    }
};
export const putProduit = (produit) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUIT });

    try {
        let result = await axios.put("/api/produit/:Id", produit);
        dispatch({ type: PUT_PRODUIT, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_PRODUIT, payload: error.response.data });
    }
};
export const deleteProduit = (id) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUIT });

    try {
        let result = await axios.delete(`/api/produit/${id}`);
        dispatch(getProduit());
    } catch (error) {
        console.log(error);
    }
};
export const Addproduit = (produit) => async (dispatch) => {
    dispatch({ type: LOAD_PRODUIT });

    try {
        let result = await axios.post("/api/produit", produit);
        console.log(result.data);
        dispatch({ type: ADD_PRODUIT, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_PRODUIT, payload: error.response.data });
    }
};
export const getProduitbyid = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/produit/${id}`);
        dispatch({ type: GET_PRODUIT_BYID, payload: res.data.produit });
    } catch (error) {
        console.log(error);
    }
};
export const editProduit = (id, newProduit) => async (dispatch) => {
    try {
        await axios.put(`/api/produit/${id}`, newProduit);
        dispatch(getProduit());
    } catch (error) {
        console.log(error);
    }
};
