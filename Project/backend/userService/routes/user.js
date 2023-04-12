const router = require("express").Router();

const {
  userLogin,
  userSignUp,
  updateUser,
  getOneUser,
  updateUserStore,
  getUserCount,
  getAllUsers,
  deleteUser,
} = require("../controller/userController");

router.post("/login", userLogin);
router.post("/signup", userSignUp);
router.get("/", getAllUsers);
router.patch("/update", updateUser);
router.get("/:id", getOneUser);
router.patch("/updateUserStore", updateUserStore);
router.get("/getUserCountForAdmin", getUserCount);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
