import React, { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProduit } from "../../Redux/actions/produit";
import { Link } from "react-router-dom";

import "./Lentilles.css";
import Produit from "../Produit/Produit";
function Lentilles() {
    const isAdmin = useSelector((state) => state.userReducer.isAdmin);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduit());
    }, []);
    const produit = useSelector((state) => state.produitReducer.produit);
    const load = useSelector((state) => state.produitReducer.load);

    //const [getproduit, setgetproduit] = useState(produit);

    return (
        <div className="homeScreen">
            {isAdmin === "Admin" && (
                <button type="button" class="btn btn-secondary">
                    <Link to="/ajouterproduit" style={{ color: "black" }}>
                        Ajouter produit{" "}
                    </Link>
                </button>
            )}
            <div className="lentille">
                {load ? (
                    <h1>Loading</h1>
                ) : (
                    produit
                        .filter((element) => element.type === "LENT")
                        .map((element, i) => <Produit produitData={element} />)
                )}
            </div>
        </div>
    );
}

export default Lentilles;
