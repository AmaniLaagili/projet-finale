const express = require("express");
const produit = express.Router();
const Produit = require("../models/Produit");
/*produit.get("/", (req, res) => {
    res.send("testing produit");
});*/

produit.post("/", async (req, res) => {
    // console.log(req.body);

    try {
        const { title, description, posterUrl, prix, type } = req.body;

        const produit = new Produit({
            title,
            description,
            posterUrl,
            prix,
            type,
        });
        await produit.save();
        res.status(200).send({ msg: "produit added", produit });
    } catch (error) {
        res.status(500).send("impossible to add produit");
    }
});

produit.get("/", async (req, res) => {
    try {
        const produits = await Produit.find();

        res.status(200).send(produits);
    } catch (error) {
        res.status(500).send("impossible to get produit");
    }
});

produit.put("/:Id", async (req, res) => {
    try {
        const id = req.params.Id;
        const produit = await Produit.updateOne(
            { _id: id },
            { $set: { ...req.body } }
        );
        res.status(200).send({ msg: "produit edited", produit });
    } catch (error) {
        res.status(500).send("impossible to edited produit");
    }
});
produit.delete("/:Id", async (req, res) => {
    try {
        const id = req.params.Id;
        //  console.log("id", id);
        const produit = await Produit.findByIdAndDelete(id);
        res.status(200).send({ msg: "produit deleted", produit });
    } catch (error) {
        res.status(500).send("impossible to deleted produit");
    }
});
produit.get("/:Id", async (req, res) => {
    try {
        const id = req.params.Id;
        const produit = await Produit.findById(id);
        res.status(200).send({ msg: "produit found", produit });
    } catch (error) {
        res.status(500).send("impossible to get produit");
    }
});
module.exports = produit;
