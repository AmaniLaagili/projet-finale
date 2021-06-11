const express = require("express");
const User = require("../models/User");
const Produit = require("../models/Produit");

const { findById } = require("../models/User");

//quand tu cliques
// { order = [...cart],
//$set : { cart : []} }

const cart = express.Router();
cart.post("/", async (req, res) => {
    //console.log(req.body);
    // const user = await User.findById(id);
    // const userCart = user.cart;
    // const isFound = userCart.filter(el._id === req.body._id);
    // console.log("isFound", isFound);
    // if (isFound.length > 0) {
    //     return res.status(500).send({ msg: "product already in cart" });
    // }
    try {
        // const user = await User.findById(id);
        // const userCart = user.cart;
        // const isFound = userCart.filter(el._id === req.body._id);
        // console.log("isFound", isFound);
        // if (isFound.length > 0) {
        //     return res.status(500).send({ msg: "product already in cart" });
        // }
        const userId = await User.findOneAndUpdate(
            //recherche par id et ajouter produit =>cart :) :* :D
            { _id: req.body.id }, // id => user
            {
                $push: { cart: [req.body.produit] }, // ajouter produit dans le cart
            }
            // console.log(req.body.produit)
        );
        res.status(200).send({ msg: "product added ", userId });

        //const userId = await User.findbyid({ req.body.id}

        // console.log(userId);
        // const produituser = req.body.produit;
        // console.log(produituser);
        // userId.cart.push(produituser);non
    } catch (error) {}
});

/*cart.post("/addqtity", async (req, res) => {
    console.log("ameni", req.body);
    try {
        const findUser = await User.findOne({ _id: req.body });

        const userId = await User.findById(req.body.id);
        const produitId = await Produit.findByIdd(req.body.id);

        res.status(200).send({ msg: "product add  ", userId });
    } catch (error) {
        res.status(200).send({ msg: "product not adided ", userId });
    }
});*/

cart.post("/addtoqtity", async (req, res) => {
    //console.log(req.body);

    try {
        const findUser = await User.findOne({
            /// recherche user by id
            _id: req.body.id.userId, // envoyer re.body ({ "userId" : "60af86f8c285641c2cea683c",})=>(admin)
        });
        // console.log(findUser);
        // Req.body.id.userId.cart

        const newCart = findUser.cart.map((el) => {
            // produit (newCart) map =>(user ili fi wostou cart)
            //  console.log(el);
            if (el._id === req.body.id.productId) {
                //envoyer dans le body ("productId": "60b0f6fbcb778916447b2c4e")=>id de produit
                // ken produit ili fi wost cart === produit ili b3atheneh fil body (ili clikit 3lih yitib3athe fil body)

                el.quantity++; // qtt++ (kima maktouba fil back)
            }
            // console.log(req.body.id.userId.cart);
            //  console.log(req.body.id.userId.cart);
            // console.log(req.body.productId);
            return el;
        });
        // console.log("newCart" + newCart);
        await User.findOneAndUpdate(
            //findOneAndUpdate : recherche   (id) :req.body.userId => recherche user  puis  faire update
            {
                _id: req.body.id.userId,
            },
            { $set: { cart: newCart } } // update  cart n3abeha bi newCart  (ajouti fi qtity)
        );

        res.status(200).send("Qtity updated");
    } catch (error) {
        res.status(400).send("impossible d'ajouter produit");
        console.log(error);
    }
});

cart.post("/demenutoqtity", async (req, res) => {
    try {
        const findUser = await User.findOne({
            _id: req.body.id.userId,
        });

        const newCart = findUser.cart.map((el) => {
            //  console.log(el);
            if (el._id === req.body.id.productId) {
                el.quantity--;
            }
            return el;
        });
        await User.findOneAndUpdate(
            {
                _id: req.body.id.userId,
            },
            { $set: { cart: newCart } }
        );
        res.status(200).send("Qtity updated");
    } catch (error) {
        res.status(400).send("impossible demenue produit");
        console.log(error);
    }
});
cart.post("/deleteelement", async (req, res) => {
    // console.log(req.body); // body :userId , productId

    try {
        const findUser = await User.findOne({
            _id: req.body.userId, // comment tester in postman !!!!!!!!!!!!
        });
        //  console.log(findUser.cart);
        // console.log(findUser.cart._id);

        let produitDeleted = findUser.cart.filter(
            (el) => el._id !== req.body.productId /// req.body.productId: jaya fil body consol.log(req.body)=>productId(produit pour supprimer)
        );
        // console.log(produitDeleted);
        await User.findByIdAndUpdate(req.body.userId, { cart: produitDeleted });
        //userId:id (user)  , produitDeleted: produit de user (click)
        res.status(200).send("element deleted");
    } catch (error) {
        console.log(error);
        res.status(400).send("impossible to deleted element");
    }
});

module.exports = cart;
