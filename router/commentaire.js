const express = require("express");
const isAuth = require("../middleware/isAuth");
const commentaire = express.Router();
const jwt = require("jsonwebtoken");
/*const Commentaire = require("../models/Commentaire");*/
const User = require("../models/User");
const Commentaire = require("../models/Commentaire");

commentaire.post("/comment/add/:id", async (req, res) => {
    console.log(req.body);
    console.log(req.params);

    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findOne({ _id: decoded.id }).select(
            "-password"
        );
        const userId = user._id;
        console.log(userId);
        const { text } = req.body;
        console.log("text" + text);
        const produitId = req.params.id;
        const newComment = await new Commentaire({ text, produitId, userId });

        await newComment.save();

        res.status(200).send("comment added");
    } catch (error) {
        console.log(error);
        res.status(500).send("can not post the commentaire");
    }

    commentaire.get("/commentaires", async (req, res) => {
        try {
            const users = await User.find({ role: "User" });
            var tab = [];
            const commentaires = users.map((el) => tab.push(el));
            res.status(200).send({ msg: "list of comments", commentaires });
        } catch (error) {
            res.status(500).send({
                errors: [{ msg: "can not bring the comments" }],
            });
        }
    });

    // try {
    //     const { text } = req.body; // text houwa il commentaire ili bech ijina fil body
    //     const userId = req.user._id; // userId : id mta3 user ili 3andou token
    //     console.log("user", userId);

    //     const produitId = req.params.id; // produitId : id mta3 produit
    //     console.log("produit", produitId);

    //     const newComment = await new Commentaire({ text, userId, produitId }); //5thit les donne
    //     await newComment.save();
    //     const produit = await Produit.findOne({ _id: produitId }); //produitId: ili bech tji mishima mta3 connetaire

    //     await produit.commentaires.push(newComment._id);
    //     //commentaires isim tablea ili fi shima produit
    //     await produit.save();
    //     res.status(200).send({
    //         msg: "comment added",
    //         newComment,
    //         produit, //sv produit
    //         user: req.user, // ili 3andou token
    //     });
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).send({
    //         errors: [{ msg: "can not post the commentaire" }],
    //     });
    // }
});
module.exports = commentaire;
