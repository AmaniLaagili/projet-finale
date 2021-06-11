import React from "react";
import "./CartDajout.css";
import { Table, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import {
    AddToQty,
    deletedToCart,
    MinusToQty,
} from "../../Redux/actions/cartAction";
import { current } from "../../Redux/actions/user";
function CartDajout({ cartitem }) {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userReducer.user._id);
    // const cartPrix = useSelector((state) => state.userReducer.user.cart.prix);
    const cart = useSelector((state) => state.userReducer.user.cart);
    console.log("cart", cart);
    // const cartType = useSelector((state) => state.userReducer.user.cart.type);

    // console.log(userPrix);
    const productId = useSelector((state) => state.produitReducer.produit);
    return (
        <div className="cart">
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td width="20%" align="center">
                            <div className="article">
                                <img src={cartitem.posterUrl} width="40%" />
                            </div>
                        </td>
                        <td width="10%" align="center">
                            <div>{cartitem.title}</div>
                        </td>
                        <td width="15%" align="center" paddingTop="50px">
                            <div> {cartitem.description}</div>
                        </td>
                        <td width="5%" align="center">
                            <div>{cartitem.prix}</div>
                        </td>
                        <td width="5%" align="center">
                            <div>{cartitem.prixPromotion}</div>
                        </td>
                        <td width="5%" align="center">
                            <div>{cartitem.type}</div>
                        </td>
                        <td width="5%" align="center">
                            <div>
                                <button
                                    onClick={() => {
                                        dispatch(
                                            AddToQty({
                                                userId: userId,
                                                productId: cartitem._id,
                                            })
                                        );
                                        dispatch(current());
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </td>
                        <td width="5%" align="center">
                            <div>{cartitem.quantity}</div>
                        </td>
                        <td width="5%">
                            <div>
                                <button
                                    onClick={() => {
                                        dispatch(
                                            MinusToQty({
                                                userId: userId,
                                                productId: cartitem._id,
                                            })
                                        );
                                        dispatch(current());
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        </td>
                        {/*<h1>{typeof TotalPrix[0]}</h1>*/}

                        {/*   <p>price:{cartitem.price} </p>*/}
                        <td width="5%" align="center">
                            {cartitem.type == "LDP"
                                ? (cartitem.price =
                                      cartitem.prixPromotion *
                                      cartitem.quantity)
                                : (cartitem.price =
                                      cartitem.prix * cartitem.quantity)}
                        </td>
                        {/*    {cart.map((el) => {
                // <h1>Hello</h1>;
                el.type == "LDP" ? (
                    <p>{el.prixPromotion * cartitem.quantity}</p>
                ) : (
                    <p>{el.prix * cartitem.quantity}</p>
                );
            })}*/}
                        <td width="10%" align="center">
                            <div>
                                <button
                                    className="cartitem_deleteBtn"
                                    onClick={() => {
                                        dispatch(
                                            deletedToCart({
                                                userId: userId,
                                                productId: cartitem._id,
                                            })
                                        );
                                        dispatch(current());
                                    }}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default CartDajout;
