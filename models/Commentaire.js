const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const CommentaireSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    produitId: { type: Schema.Types.ObjectId, ref: "produit", required: true },
    text: { type: String, required: true },
});
module.exports = Commentaire = model("commentaire", CommentaireSchema);
