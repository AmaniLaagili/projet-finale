import React from "react";
import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../../Redux/actions/productAction";
import { addToCart } from "../../Redux/actions/cartAction";

function ProductScreen({ match, history }) {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const getProductDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = getProductDetails;
    {
        useEffect(() => {
            if (product && match.params.id !== product._id) {
                dispatch(getProductDetails(match.params.id));
            }
        }, [dispatch, product, match]);
    }
    return (
        <div className="productscren">
            <div className="productscreen_left">
                <div className="left_image">
                    <img
                        src="https://img-cdn1.cdnsbg.com/600/1/14/8028_1599492288285.jpg"
                        alt="lll"
                    />
                </div>
                <div className="left_info">
                    <p className="left_name">Product1</p>
                    <p>Price:$499.99</p>
                    <p>jnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</p>
                </div>
            </div>
            <div className="productscreen_right">
                <div className="right_info">
                    <p>
                        Price:<span>$499.99</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button"> Add to Cart</button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductScreen;
