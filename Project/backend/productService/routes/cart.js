const router = require("express").Router();

const {
  createCart,
  getAllCart,
  updateCart,
  getOneCart,
  deleteCart,
} = require("../controller/cartController");
//create
router.post("/add", createCart);
//display
router.get("/", getAllCart);
//update
router.put("/update/:storeid", updateCart);

router.delete("/delete/:storeid", deleteCart);

router.get("/get/:storeid", getOneCart);

module.exports = router;