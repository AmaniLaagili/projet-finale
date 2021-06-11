import { combineReducers } from "redux";
import userReducer from "./user";
import produitReducer from "./produit";
import cartReducer from "./cartReducer";

import commendeReducer from "./commendeReducer";
import commentaireReducer from "./commentaireReducer";

import { getProductsReducer, getProductDetailsReducer } from "./productReducer";

const rootReducer = combineReducers({
    userReducer,
    produitReducer,
    cart: cartReducer,
    getProductDetails: getProductDetailsReducer,
    getProducts: getProductsReducer,
    commendeReducer,
    commentaireReducer,
});
export default rootReducer;
