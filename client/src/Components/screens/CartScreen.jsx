import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "./CartScreen.css";
import { useSelector } from "react-redux";
import CartDajout from "./CartDajout";
import { useDispatch } from "react-redux";

import { postCommende } from "../../Redux/actions/commendeAction";
import { Link } from "react-router-dom";
import { current } from "../../Redux/actions/user";
import ModaleValidation from "./ModaleValidation";
import { Table, Button } from "react-bootstrap";

const CartScreen = ({ match }) => {
    const dispatch = useDispatch();
    const commendeuser = useSelector((state) => state.userReducer.user);

    const commande = useSelector((state) => state.commendeReducer.commende);
    const getProducts = useSelector((state) => state.getProducts.products);
    const cart = useSelector((state) => state.userReducer.user.cart);
    const [BigTotal, setBigTotal] = useState();

    console.log(cart);
    const produitId = match.params.produitId;
    /*  var order = {
        title: cart.title,
        posterUrl: cart.posterUrl,
        description: cart.description,
        prix: cart.prix,
        prixPromotion: cart.prixPromotion,
        prixPromotion: cart.type,
    };*/

    //console.log(match);
    const [produit, setproduit] = useState();

    useEffect(() => {
        setproduit(getProducts.find((produit) => produit._id === produitId));
    }, []);
    var x = 0;
    useEffect(() => {
        if (cart) {
            cart.forEach((el) => {
                x = x + el.price;
            });
        }
        setBigTotal(x);
    }, [cart]);
    console.log("total", setBigTotal);
    // console.log(produit);
    return !cart ? (
        <h1>loading</h1>
    ) : (
        <div className="cartscreen">
            <div className="cartscreen_left">
                {/*  <h2>Shopping Cart</h2>*/}
            </div>
            <div>
                <Table striped bordered hover width="100%">
                    <thead>
                        <div className="tableTop">
                            <tr>
                                <th>ARTICLE</th>
                                <th>TITLE</th>
                                <th>DESCRIPTION</th>
                                <th>PRIX UNITAIRE </th>
                                <th>TYPE</th>
                            </tr>
                        </div>
                    </thead>
                </Table>

                <div>
                    <h1>Total : {BigTotal}</h1>
                    {/* <Link to="/CommandeValider">
                        <button
                            className="commande"
                            onClick={() => {
                                dispatch(postCommende(commendeuser._id, cart));
                            }}
                        >
                            {" "}
                            Valider Commande
                        </button>
                    </Link> */}
                </div>

                {cart.map((el) => (
                    <div className="tableItem">
                        {" "}
                        <CartDajout cartitem={el} />
                    </div>
                ))}
                <ModaleValidation BigTotal={BigTotal} />
            </div>
        </div>
    );
};

export default CartScreen;
