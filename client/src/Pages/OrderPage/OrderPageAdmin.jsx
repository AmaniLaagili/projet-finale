import React from "react";
import { useSelector } from "react-redux";
import OrderCardAdmin from "./OrderCardAdmin";
function OrderPageAdmin() {
    const users = useSelector((state) => state.userReducer.users);
    const user = useSelector((state) => state.userReducer.user);
    const order = useSelector((state) => state.userReducer.user.order);

    return !users || !user ? (
        <h1>loading</h1>
    ) : (
        <div>
            {users.map(
                (user) =>
                    user &&
                    user.order.map((order, index) => (
                        <OrderCardAdmin user={user} order={order} Key={index} />
                    ))
            )}
        </div>
    );
}

export default OrderPageAdmin;
