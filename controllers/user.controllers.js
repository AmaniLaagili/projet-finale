const User = require("../models/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
exports.Register = async (req, res) => {
    try {
        const { email, password} = req.body;

        const findUser = await User.findOne({ email });

        if (findUser) {
            return res
                .status(400)
                .send({ errors: [{ msg: "email should be unique" }] });
        }

        const newUser = new User({ ...req.body });

        const hashedpassword = await bcrypt.hash(password, saltRounds);
        newUser.password = hashedpassword;

        await newUser.save();

        const token = jwt.sign(
            {
                id: newUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "3h" }
        );

        res.status(200).send({
            msg: "Register successfully",
            user: newUser,
            token,
        });
    } catch (error) {
        res.status(500).send({ error: [{ msg: "user not saved" }] });
    }
};

exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const findUser = await User.findOne({ email });

        if (!findUser) {
            return res
                .status(400)
                .send({ errors: [{ msg: "bad credential" }] });
        }

        const comparePass = await bcrypt.compare(password, findUser.password);

        if (!comparePass) {
            return res
                .status(400)
                .send({ errors: [{ msg: "bad credential" }] });
        }
        const token = jwt.sign(
            {
                id: findUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "3h" }
        );
        res.status(200).send({
            msg: "login successfully",
            user: findUser,
            token,
        });
    } catch (error) {
        res.status(500).send({ error: [{ msg: "user not saved" }] });
    }
};
