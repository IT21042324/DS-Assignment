const router = require("express").Router();

const {
  createOrder,
  getAllOrder,
  updateOrder,
  getOneOrder,
  deleteOrder,
} = require("../controller/orderController");
//create
router.post("/add", createOrder);
//display
router.get("/", getAllOrder);
//update
router.put("/update/:storeid", updateOrder);

router.delete("/delete/:storeid", deleteOrder);

router.get("/get/:storeid", getOneOrder);

module.exports = router;
