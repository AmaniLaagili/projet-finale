import React, { useEffect } from "react";
import "./Lunettesoleil.css";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./Lunettesoleil.css";
import Formlunette from "../Formlunette/Formlunette";
import { useDispatch } from "react-redux";
import { getProduit } from "../../Redux/actions/produit";
import Produit from "../Produit/Produit";
import { Link } from "react-router-dom";

function Lunettesoleil() {
    const isAdmin = useSelector((state) => state.userReducer.isAdmin);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduit());
    }, []);
    const produit = useSelector((state) => state.produitReducer.produit);
    const load = useSelector((state) => state.produitReducer.load);
    // const [getproduit, setgetproduit] = useState(produit);
    //const [lunettesoleill, setlunettesoleill] = useState();

    //console.log(lunettesoleill);
    return (
        <div className="homeScreen">
            {/*<button>Ajouter Model</button>*/}
            {isAdmin === "Admin" && (
                <button type="button" class="btn btn-secondary">
                    <Link to="/ajouterproduit" style={{ color: "black" }}>
                        Ajouter produit{" "}
                    </Link>
                </button>
            )}

            <div className="lunettesoleil">
                {load ? (
                    <h1>Loading</h1>
                ) : (
                    produit
                        .filter((element) => element.type === "LDS")
                        .map((element, i) => <Produit produitData={element} />)
                )}
            </div>
        </div>
    );
}

export default Lunettesoleil;
