const router = require("express").Router();

const {
  createCart,
  getAllCart,
  updateCart,
  getOneCart,
  deleteCart,
} = require("../controller/cartController");

router.post("/add", createCart);
router.get("/", getAllCart);
router.put("/update/:storeid", updateCart);
router.delete("/delete/:storeid", deleteCart);
router.get("/get/:storeid", getOneCart);

module.exports = router;
