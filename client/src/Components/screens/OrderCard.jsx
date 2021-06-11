import React, { useEffect } from "react";
import { current } from "../../Redux/actions/user";
import { useDispatch } from "react-redux";

function OrderCard({ cart }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, []);
    return (
        <div className="CartItem">
            <div className="cartitem_image">
                <img src={cart.posterUrl} alt="image produit" />
            </div>

            <p>{cart.title}</p>
            <p>{cart.description}</p>

            <p className="cartitem_price">{cart.prix}</p>
        </div>
    );
}

export default OrderCard;
