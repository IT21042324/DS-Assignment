const jwt = require("jsonwebtoken");
const userModel = require("../models/User");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorizeation token not found" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    const { data } = await userModel.findById(_id);

    req.user = data;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Unauthorized Request" });
  }
};

module.exports = requireAuth;
