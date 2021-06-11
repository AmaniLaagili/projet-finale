import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProduit, getProduitbyid } from "../../Redux/actions/produit";
import { Link } from "react-router-dom";
import "./Produit.css";
function Produit({ produitData }) {
    const dispatch = useDispatch();

    const isAdmin = useSelector((state) => state.userReducer.isAdmin);
    // const produit = useSelector((state) => state.produitReducer.produit);
    // console.log(produit);
    return (
        <div className="produit">
            <img src={produitData.posterUrl} alt="produit" />
            <div className="produit_info">
                <p className="info_name">{produitData.title}</p>
                <p className="info_description">{produitData.description}</p>
                <p className="info_price">{produitData.prix}</p>
                <p className="info_price">{produitData.type}</p>

                <Link
                    to={`/product/${produitData._id}`}
                    className="info_button"
                >
                    View
                </Link>
                {isAdmin === "Admin" && (
                    <button className="info_button">
                        <Link
                            to="/updateproduit"
                            onClick={() =>
                                dispatch(getProduitbyid(produitData._id))
                            }
                        >
                            {" "}
                            Update
                        </Link>{" "}
                    </button>
                )}

                {isAdmin === "Admin" && (
                    <button
                        className="info_button"
                        onClick={() => dispatch(deleteProduit(produitData._id))}
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
}

export default Produit;
