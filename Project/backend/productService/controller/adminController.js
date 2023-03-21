const adminModel = require("../models/Admin");

const register = async (req, res) => {
    const username = req.body.username;
    const findUser = await adminModel.findOne({ username: username });
    if (!findUser) {
        const newAdmin = adminModel.create(req.body);
        res.json(newAdmin);
    } else {
        res.status(400).json({ message: "User already exists" });
    }
};

module.exports = { register };