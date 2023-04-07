const router = require("express").Router();

const {
  userLogin,
  userSignUp,
  updateUser,
  getOneUser,
  updateUserStore,
} = require("../controller/userController");

router.post("/login", userLogin);
router.post("/signup", userSignUp);
router.patch("/update", updateUser);
router.get("/:id", getOneUser);
router.patch("/updateUserStore", updateUserStore);

module.exports = router;
