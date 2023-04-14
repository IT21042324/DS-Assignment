const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorizeation token not found" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    const response = await fetch("http://localhost:8080/api/user/" + _id);
    const user = await response.json();

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Unauthorized Request" });
  }
};

module.exports = requireAuth;
