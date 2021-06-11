import axios from "axios";
import {
    LOAD_COMMENTAIRE,
    ADD_COMMENTAIRE,
    FAIL_COMMENTAIRE,
} from "../constants/commentaireConstants";
import { getProduitbyid } from "./produit";

export const addCommentaire =
    (commentaire, id, history) => async (dispatch) => {
        //produit le produit id mta3 produit history
        dispatch({ type: LOAD_COMMENTAIRE });

        try {
            const config = {
                headers: { authorization: localStorage.getItem("token") },
            };
            let res = await axios.post(
                `/api/commentaire/comment/add/${id}`,
                commentaire,
                config
            );

            dispatch({ type: ADD_COMMENTAIRE, payload: res.data });
            dispatch(getProduitbyid(id, history));
        } catch (error) {
            console.log(error);
            //dispatch({ type: FAIL_COMMENTAIRE, payload: error.response.data });
        }
    };
