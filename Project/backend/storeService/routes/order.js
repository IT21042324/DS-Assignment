const router = require("express").Router();
const requireAuth = require("../middleware/requireAuth");

// Import order controller functions
const {
  createOrder,
  getAllOrder,
  updateOrder,
  getOneOrder,
  getAllOrderPerStore,
  updateOrderStatus,
  getOrderCountForAdmin,
  getAllStoreOrders,
  getAllUserOrders,
  setReviewStatus,
} = require("../controller/orderController");

router.use(requireAuth);

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

//Route for getting the total order count to display in the admin dashboard
router.get("/getOrderCountForAdmin", getOrderCountForAdmin);

//Route for getting all the orders
router.get("/getAllStoreOrders", getAllStoreOrders);

//Route for getting all the orders for a particular user
router.get("/getAllStoreOrders/:id", getAllUserOrders);

//Route to set review status as true once user submites a store review
router.patch("/setReviewStatus/:id", setReviewStatus);

module.exports = router;
