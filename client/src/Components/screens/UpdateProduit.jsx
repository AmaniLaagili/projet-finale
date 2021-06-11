import React, { useState } from "react";
import { editProduit } from "../../Redux/actions/produit";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./UpdateProduit.css";
const UpdateProduit = () => {
    const [posterUrl, setPosterUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [prix, setPrix] = useState("");
    const [type, setType] = useState("");

    const dispatch = useDispatch();
    const productReducer = useSelector((state) => state.produitReducer.prodact);
    const history = useHistory();
    console.log("history", history);

    return (
        <div className="updateproduit">
            <label>image:</label>
            <input
                type="text"
                name="image"
                onChange={(e) => setPosterUrl(e.target.value)}
            />
            <label>title:</label>
            <input
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>description</label>

            <input
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <label>prix</label>
            <input
                type="text"
                name="prix"
                onChange={(e) => setPrix(e.target.value)}
            />
            <label>type</label>
            <input
                type="text"
                name="type"
                onChange={(e) => setType(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch(
                        editProduit(productReducer._id, {
                            posterUrl,
                            title,
                            description,
                            prix,
                            type,
                        })
                    );
                    alert("product modified succefuly");
                    history.goBack();
                }}
            >
                Envoyer
            </button>
        </div>
    );
};

export default UpdateProduit;
