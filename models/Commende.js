const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const CommendeSchema = new Schema({
    /*  title: { type: String },
    description: { type: String },
    posterUrl: { type: String },
    prix: String,
    prixPromotion: String,
    type: String,*/
    produit: [],
    userid: {},
});
module.exports = commende = model("commende", CommendeSchema);
