const router = require("express").Router();

// Import order controller functions
const {
  createOrder,
  getAllOrder,
  updateOrder,
  getOneOrder,
  getAllOrderPerStore,
  updateOrderStatus,
} = require("../controller/orderController");

// Route for creating a new order
router.post("/add", createOrder);

// Route for getting all orders
router.get("/", getAllOrder);

// Route for updating an existing order
router.patch("/update/", updateOrder);

// Route for getting a single order by ID
router.get("/get/:id", getOneOrder);

// Route for getting all orders for a specific store
router.get("/getStoreOrder/:id", getAllOrderPerStore);

// Route for updating the status of an existing order
router.patch("/updateOrderStatus", updateOrderStatus);

module.exports = router;
