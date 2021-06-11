const express = require("express");
const { Register, Login } = require("../controllers/user.controllers");
const isAuth = require("../middleware/isAuth");
const {
    validation,
    registerValidate,
    LoginValidate,
} = require("../middleware/validateUser");
const User = require("../models/User");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("testing router");
});
router.put("/:Id", async (req, res) => {
    try {
        const id = req.params.Id;
        const user = await User.updateOne(
            { _id: id },
            { $set: { ...req.body } }
        );
        res.status(200).send({ msg: "profile edited", user });
    } catch (error) {
        res.status(500).send("impossible to edited profile");
    }
});
{
    /*
router.put("/textCommende/:id", async (req, res) => {
    try {
        const id = req.params.id; //id => user
        const user = await User.findById(id); // jibna il user bil id
        const userCart = user.cart; // userCart => jibna cart de user
        const orderUpdated = [...userCart]; // variable orderUpdated =>  tout les cart
        const updatedUser = await User.findByIdAndUpdate(id, {
            $push: { order: orderUpdared }, // tableau order =>orderUpdated: tout les cart
            $unset: { cart: [] }, // mise a jour de cart vide cart
        });
    } catch (error) {
        res.status(500).send("impossible to edited profile");
    }
});
*/
}
router.post("/register", registerValidate(), validation, Register);

router.post("/login", LoginValidate(), validation, Login);
router.get("/current", isAuth, (req, res) => {
    res.send({ msg: "authorized", user: req.user });
});
//valider commande
router.put("/validerCommende/:id", async (req, res) => {
    try {
        const findUser = await User.findOne({
            _id: req.params.id, /// recherche user par id
        });

        const newCart = findUser.cart; // newCart <= cart ili fil user
        const p = await User.findOneAndUpdate(
            {
                _id: req.params.id, /// recherche par id <= user
            },
            { $push: { order: newCart }, $unset: { cart: [] } } // push order <= updatedOrder (tt les cart)
            //$unset:vider cart
        );
        /*console.log(req.body);*/
        res.status(200).send({ msg: "commande validée", p });
    } catch (error) {
        res.status(500).send("impossible de valider la commande");
    }
});

router.get("/users", async (req, res) => {
    try {
        const users = await User.find({ role: "User" });
        res.status(200).send({ msg: "list of users", users });
    } catch (error) {
        res.status(500).send("can not get the list of users");
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.deleteOne({ _id: id });
        res.status(200).send({ msg: "user is deleted", user });
    } catch (error) {
        res.status(500).send("can not delete the user");
    }
});
module.exports = router;
