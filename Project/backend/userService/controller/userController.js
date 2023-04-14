const userModel = require("../models/User");
const jwt = require("jsonwebtoken");

//To generate a token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
  //1st argument->object for payload
  //2nd argument-> secret string only know for our server (.env file)
  //3rd argument
};

const userLogin = async (req, res) => {
  try {
    const { userName, password, role } = req.body;
    const user = await userModel.login(userName, password, role);
    res.json({ ...user.toObject(), token: createToken(user._id) });
  } catch (err) {
    console.log(err.message);
    res.json({ err: err.message });
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

    //to add the token to the user object
    user.token = token;

    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.json({ err: err.message });
  }
};

const getAllUsers = async function (req, res) {
  try {
    const users = await userModel.find();
    res.json({ users, userCount: users.length });
  } catch (err) {
    res.send(err.message);
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

    return res.json(user);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const data = await userModel.findByIdAndDelete(req.params.id);

    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
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

const getUserCount = async (req, res) => {
  try {
    const data = await userModel.find();

    res.json({ userCount: data.length });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  userSignUp,
  userLogin,
  getAllUsers,
  updateUser,
  deleteUser,
  getOneUser,
  updateUserStore,
  getUserCount,
};
