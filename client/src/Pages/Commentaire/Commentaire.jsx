import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCommentaire } from "../../Redux/actions/commentaireAction";

function Commentaire({ history, produitId }) {
    const produit = useSelector((state) => state.produitReducer.produit);
    console.log("produit", produit);
    const dispatch = useDispatch();

    const [newComment, setNewComment] = useState("");
    const handleChange = (input) => {
        setNewComment(input);
    };
    {
        /*const produit = produits.map((el, i) => el);*/
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCommentaire({ text: newComment }, produitId, history));
    };
    return (
        <div>
            {/* {produit =produits.map((el,i)=> el)}*/}
            <input
                type="text"
                onChange={(e) => handleChange(e.target.value)}
            ></input>
            <button onClick={handleSubmit}> Ajouter Commentaire </button>
        </div>
    );
}

export default Commentaire;
