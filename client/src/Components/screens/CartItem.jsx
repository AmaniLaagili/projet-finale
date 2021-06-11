import React, { useEffect, useState } from "react";
import "./CartItem.css";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/actions/cartAction";
import { getProduit } from "../../Redux/actions/produit";
import Commentaire from "../../Pages/Commentaire/Commentaire";
import CommentaireCard from "../../Pages/Commentaire/CommentaireCard";
const CartItem = ({ match }) => {
    // const [produit, getproduit] = useState();
    // console.log(match);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduit());
    }, []);
    const getProducts = useSelector((state) => state.produitReducer.produit);
    const cartuser = useSelector((state) => state.userReducer.user);
    console.log(cartuser);
    const [produit, setproduit] = useState();
    const produitId = match.params.produitId;
    // console.log(produit);
    useEffect(() => {
        if (getProducts) {
            setproduit(
                getProducts.find((produit) => produit._id === produitId)
            );
        }
    }, [getProducts]);
    console.log(produit);

    return !produit ? (
        <h1>loading</h1>
    ) : (
        <div className="CartItem">
            <div className="cartitem_image">
                <img src={produit.posterUrl} alt="image produit" />
            </div>

            <Link to={`/product/${111}`} className="cartitem_name">
                <p>{produit.title}</p>
                <p>{produit.description}</p>
            </Link>

            <p className="cartitem_price">{produit.prix}</p>

            <button
                onClick={() => {
                    dispatch(
                        addToCart(cartuser._id, {
                            ...produit,
                            quantity: 1,
                        })
                    );
                }}
            >
                Add To Card
            </button>
            <div>
                <Commentaire produitId={produitId} />
            </div>
            <div>
                <CommentaireCard />
            </div>
        </div>
    );
};

export default CartItem;
