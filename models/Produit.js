const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const ProduitSchema = new Schema({
    title: { type: String },
    description: { type: String },
    posterUrl: { type: String },
    prix: String,
    prixPromotion: String,
    type: String,
    commentaires: [
        {
            type: Schema.Types.ObjectId,
            ref: "commentaire",
        },
    ],
});
module.exports = Produit = model("produit", ProduitSchema);
