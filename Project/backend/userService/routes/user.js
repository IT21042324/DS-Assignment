const router = require("express").Router();

const {
  userLogin,
  userSignUp,
  updateUser,
  getOneUser,
} = require("../controller/userController");

router.post("/login", userLogin);
router.post("/signup", userSignUp);
router.patch("/update", updateUser);
router.get("/:id", getOneUser);

module.exports = router;
