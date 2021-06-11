import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./Lunettevue.css";
import { useDispatch } from "react-redux";
import { getProduit } from "../../Redux/actions/produit";
import Produit from "../Produit/Produit";
import { Link } from "react-router-dom";

function Lunettevue() {
    const isAdmin = useSelector((state) => state.userReducer.isAdmin);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduit());
    }, []);
    const produit = useSelector((state) => state.produitReducer.produit);
    const load = useSelector((state) => state.produitReducer.load);

    // const [getproduit, setgetproduit] = useState(produit);
    //let lunettesoleill = getproduit.filter((element) => element.type === "LDV");
    return (
        <div className="homeScreen">
            {isAdmin === "Admin" && (
                <button type="button" class="btn btn-secondary">
                    <Link to="/ajouterproduit" style={{ color: "black" }}>
                        Ajouter produit{" "}
                    </Link>
                </button>
            )}

            <div className="lunettevue">
                {load ? (
                    <h1>Loading</h1>
                ) : (
                    produit
                        .filter((element) => element.type === "LDV")
                        .map((element, i) => <Produit produitData={element} />)
                )}
            </div>
        </div>
    );
}

export default Lunettevue;
