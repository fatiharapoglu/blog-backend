const jwt = require("jsonwebtoken");
const User = require("../models/user");

const loginController = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ msg: "Authentication failed." });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Authentication failed." });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        return res.status(200).json({ token });
    } catch (err) {
        return res.status(500).json({ msg: "Something went wrong." });
    }
};

module.exports = loginController;
