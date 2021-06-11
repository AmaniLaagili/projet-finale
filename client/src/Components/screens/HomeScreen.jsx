import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../Redux/actions/productAction";
import "./HomeScreen.css";
import MovieCard from "../../Pages/MovieCard/MovieCard";
import Produit from "../../Pages/Produit/Produit";
import { Link } from "react-router-dom";
const HomeScreen = () => {
    const isAdmin = useSelector((state) => state.userReducer.isAdmin);

    const dispatch = useDispatch();
    const getProducts = useSelector((state) => state.getProducts);
    //const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, []);
    const produits = useSelector((state) => state.produitReducer.produit);
    return (
        <div className="homeScreen">
            {isAdmin === "Admin" && (
                <button type="button" class="btn btn-secondary">
                    <Link to="/ajouterproduit" style={{ color: "black" }}>
                        Ajouter produit{" "}
                    </Link>
                </button>
            )}

            <h2 className="homeScreen_title">Latest Produit</h2>

            <div className="homeScreen_products">
                {produits.map((element, i) => (
                    <Produit produitData={element} />
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;
