const userModel = require("../models/User");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};

const userLogin = async (req, res) => {
  const { userName, password, role } = req.body;

  try {
    const user = await userModel.login(userName, password, role);

    const token = createToken(user._id);
    user.token = token;

    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ err: err.message });
  }
};

const userSignUp = async function (req, res) {
  const { userName, password, contact, address, role, image } = req.body;

  try {
    const user = await userModel.signup(
      userName,
      password,
      contact,
      address,
      image,
      role
    );
    const token = createToken(user._id);
    user.token = token;

    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ err: err.message });
  }
};

const updateUser = async function (req, res) {
  const { userId, userName, image } = req.body;

  try {
    const user = await userModel.findOneAndUpdate(
      { _id: userId },
      { userName, image },
      { new: true }
    );

    console.log(user);
    return res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
  }
};

const getOneUser = async function (req, res) {
  const id = req.params.id;
  const { role } = req.body;

  try {
    const user = await userModel.find({ _id: id, role });
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
  }
};

const updateUserStore = async (req, res) => {
  const { userID, storeID } = req.body;

  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { _id: userID },
      { storeID }
    );
    console.log(updateUser);
    res.json(updatedUser);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

module.exports = {
  userSignUp,
  userLogin,
  updateUser,
  getOneUser,
  updateUserStore,
};
