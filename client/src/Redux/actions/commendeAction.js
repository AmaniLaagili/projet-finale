import axios from "axios";
import {
    LOAD_COMMENDE,
    ADD_COMMENDE,
    FAIL_COMMENDE,
} from "../constants/commendeConstants";
import { current } from "./user";

export const postCommende = (id, commende) => async (dispatch) => {
    dispatch({ type: LOAD_COMMENDE });

    try {
        let result = await axios.put(
            `/api/user/validerCommende/${id}`,
            commende
        );
        dispatch({ type: ADD_COMMENDE, payload: result.data });
        dispatch(current());
    } catch (error) {
        console.log("error", error);
        dispatch({ type: FAIL_COMMENDE, payload: error.response.data });
    }
};
