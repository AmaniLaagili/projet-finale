import React from "react";
import "./OrderCardAdmin.css";
import { Link } from "react-router-dom";

const OrderCardAdmin = ({ user, order }) => {
    return (
        <div className="CartItem">
            <div className="cartitem_image">
                <img src={order.posterUrl} alt="image produit" />
            </div>
            <p>quantity:{order.quantity}</p>

            <p>{order.title}</p>
            <p>{order.description}</p>

            <p className="cartitem_price">{order.prix}DT</p>
            <div className="cartitem_name">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>

            <p className="cartitem_price"></p>
        </div>
    );
};

export default OrderCardAdmin;
