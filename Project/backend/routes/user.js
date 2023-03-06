const router = require("express").Router();

const { userLogin, userSignUp } = require("../controller/userController");

router.post("/login", userLogin);
router.post("/signup", userSignUp);

module.exports = router;
