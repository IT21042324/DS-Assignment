const router = require("express").Router();

const {
  createOrder,
  getAllOrder,
  updateOrder,
  getOneOrder,
  getAllOrderPerStore,
} = require("../controller/orderController");
//create
router.post("/add", createOrder);
//display
router.get("/", getAllOrder);
//update
router.patch("/update/", updateOrder);

router.get("/get/", getOneOrder);

router.get("/getStoreOrder/:id", getAllOrderPerStore);

module.exports = router;
