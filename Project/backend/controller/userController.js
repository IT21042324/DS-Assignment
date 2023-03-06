const userModel = require("../models/User");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};

const userLogin = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await userModel.login(userName, password);

    const token = createToken(user._id);

    res
      .status(200)
      .json({ userName: user.userName, password: user.password, token });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ err: err.message });
  }
};

const userSignUp = async function (req, res) {
  const { userName, password, contact, address } = req.body;

  try {
    const user = await userModel.signup(userName, password, contact, address);
    const token = createToken(user._id);

    res.status(200).json({ userName, password, contact, address, token });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ err: err.message });
  }
};

module.exports = { userSignUp, userLogin };
