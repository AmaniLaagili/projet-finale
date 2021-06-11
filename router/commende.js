const express = require("express");
const commende = express.Router();
const Commende = require("../models/Commende");
{
    /*
commende.post("/", async (req, res) => {
    try {
        const { title, description, posterUrl, prix, prixPromotion, type } =
            req.body;
        const commende = new Commende({
            title,
            description,
            posterUrl,
            prix,
            prixPromotion,
            type,
        });
        await commende.save();
        res.status(200).send({ msg: "commende added", commende });
    } catch (error) {
        res.status(500).send("imposible to add commende");
    }
});*/
}

// commende.put("/validerCommende/:id", async (req, res) => {
//     try {
//         const findUser = await User.findOne({
//             _id: req.params.id, /// recherche user par id
//         });

//         const newCart = findUser.cart; // newCart <= cart ili fil user
//         const updatedOrder = [...newCart]; //updatedOrder <=  ...newCart
//         const p = await User.findOneAndUpdate(
//             {
//                 _id: req.params.id, /// recherche par id <= user
//             },
//             { $push: { order: updatedOrder }, $unset: { cart: [] } } // push order <= updatedOrder (tt les cart)
//             //$unset:vider cart
//         );
//         /*console.log(req.body);*/
//         res.status(200).send({ msg: "commande validée", p });
//     } catch (error) {
//         res.status(500).send("impossible de valider la commande");
//     }
// });

module.exports = commende;
