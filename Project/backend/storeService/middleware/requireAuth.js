const jwt = require("jsonwebtoken");
const axios = require("axios");

const requireAuth = async (req, res, next) => {
  const { authorization, role } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token not found" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.SECRET);
    const { data } = await axios.get(
      `http://localhost:8080/api/user/${id}/${role}`
    );

    req.user = data;

    console.log(req);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Unauthorized Request" });
  }
};

module.exports = requireAuth;
