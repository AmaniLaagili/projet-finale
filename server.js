console.clear();
const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./router/user");
const produit = require("./router/produit");
const cart = require("./router/cart");
const commende = require("./router/Commende");
const commentaire = require("./router/commentaire");

const app = express();
require("dotenv").config();

connectDB();
app.use(express.json());
app.use("/api/user", user);
app.use("/api/produit", produit);
app.use("/api/cart", cart);
app.use("/api/commende", commende);
app.use("/api/commentaire", commentaire);
app.get("/lunettesoleil", (req, res) => {
    res.sendFile(__dirname + "/Pages/lunettesoleil/lunettesoleil.html");
});

const PORT = process.env.PORT;

app.listen(PORT, (err) =>
    err ? console.error(err) : console.log(`server is runnig on PORT ${PORT}`)
);
