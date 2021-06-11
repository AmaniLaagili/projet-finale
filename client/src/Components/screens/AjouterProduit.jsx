import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addproduit } from "../../Redux/actions/produit";
import { useHistory } from "react-router";

function AjouterProduit() {
    const [posterUrl, setPosterUrl] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [prix, setPrix] = useState("");
    const [type, setType] = useState("");
    const dispatch = useDispatch("");
    const history = useHistory();

    return (
        <div className="ajouterproduit">
            <label>image:</label>
            <input type="text" onChange={(e) => setPosterUrl(e.target.value)} />
            <label>title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <label>description</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
            />

            <label>prix</label>
            <input type="text" onChange={(e) => setPrix(e.target.value)} />

            <label>type</label>
            <input type="text" onChange={(e) => setType(e.target.value)} />
            <button
                onClick={() => {
                    dispatch(
                        Addproduit({
                            posterUrl,
                            title,
                            description,
                            prix,
                            type,
                        })
                    );
                    alert("add product succefuly");
                    history.goBack();
                }}
            >
                envoyer
            </button>
        </div>
    );
}

export default AjouterProduit;
