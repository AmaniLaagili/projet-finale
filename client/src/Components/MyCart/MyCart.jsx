import React from "react";
import { Link } from "react-router-dom";
import "./MyCart.css";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../Redux/actions/user";

function MyCart() {
    const isAdmin = useSelector((state) => state.userReducer.user.role);
    console.log(isAdmin);
    const dispatch = useDispatch();

    const produit = useSelector((state) => state.userReducer.user.cart); //{produit.quantity}
    //const cartPrix = useSelector((state) => state.userReducer.user.cart.prix);

    // console.log(produit);
    // const isAdmin = useSelector(state=>state.userReducer.isAdmin);
    return !produit ? (
        <h1>loading</h1>
    ) : (
        <nav className="navbar">
            <div className="navbar_logo"></div>

            <ul className="navbar_links">
                <li>
                    {" "}
                    {isAdmin === "Admin" && (
                        <Link to="/users">
                            {" "}
                            <button
                                type="button"
                                class="btn btn-secondary"
                                onClick={() => dispatch(getUsers())}
                            >
                                Users
                            </button>
                        </Link>
                    )}
                </li>

                <li>
                    {" "}
                    {isAdmin === "Admin" && (
                        <Link to="/orderPageAdmin">
                            <button type="button" class="btn btn-danger">
                                Commande
                            </button>
                        </Link>
                    )}
                </li>

                <li>
                    {isAdmin === "User" && (
                        <Link to="/cart" className="cart_link">
                            <i className="fas fa-shopping-cart"></i>

                            <span>
                                Card
                                <span className="cartlogo_badge">
                                    {produit.length}
                                </span>
                            </span>
                        </Link>
                    )}
                    {/*} <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>

                        <span>
                            Card
                            <span className="cartlogo_badge">
                                {produit.length}
                            </span>
                        </span>
                    </Link>*/}
                </li>

                <li>
                    <Link to="/homescreen">Shop</Link>
                </li>
            </ul>

            <div className="hanburger_menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default MyCart;
