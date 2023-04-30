const router = require("express").Router(); // Importing the Router class from the Express package
const requireAuth = require("../middleware/requireAuth");

const {
  createPayment,
  getAllPayment,
  deletePayment,
  updatePayment,
  getTotalPaymentPerStore,
  updatePaymentStatus,
  getTotalPaymentForAdmin,
} = require("../controller/paymentController"); // Importing the controller functions from '../controller/paymentController'

router.use(requireAuth);

//create a new payment
router.post("/add", createPayment); // Handles POST requests to create a new payment using the createPayment() function

//get all payments
router.get("/", getAllPayment); // Handles GET requests to get all payments using the getAllPayment() function

//update all payments
router.put("/update/", updatePayment); // Handles PUT requests to update payments using the updatePayment() function

//delete a payment
router.delete("/delete/", deletePayment); // Handles DELETE requests to delete a payment using the deletePayment() function

//To get the total payments done to a certain store
router.get("/getStoreTotal/:id", getTotalPaymentPerStore); // Handles GET requests to get the total payments made to a specific store using the getTotalPaymentPerStore() function

router.patch("/updatePaymentStatus", updatePaymentStatus); //Handles updating of payment status

router.get("/getAdminTotal", getTotalPaymentForAdmin); //Handles calculating the online store profit

module.exports = router; // Exports the router instance for use in the app.
