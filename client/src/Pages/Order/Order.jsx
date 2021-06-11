import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderCard from "../../Components/screens/OrderCard";
import { current } from "../../Redux/actions/user";

function Order() {
    const user = useSelector((state) => state.userReducer.user);
    const order = useSelector((state) => state.userReducer.user.order);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(current());
    }, []);

    return !user ? (
        <h1>loading</h1>
    ) : (
        <div>
            {user &&
                user.order.map((cart, index) => (
                    <OrderCard cart={cart} key={index} />
                ))}
        </div>
    );
}

export default Order;
