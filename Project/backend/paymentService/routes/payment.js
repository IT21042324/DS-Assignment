const router = require("express").Router();

const {
<<<<<<< HEAD:Project/backend/routes/payment.js
    createPayment,
    getAllPayment,
    deletePayment,
    updatePayment,
=======
  createPayment,
  getAllPayment,
  deletePayment,
  updatePayment,
>>>>>>> c59a52cf67322831c77c80ec58eebcf50f0ffe3c:Project/backend/paymentService/routes/payment.js
} = require("../controller/paymentController");

//create a new payment
router.post("/add", createPayment);

//get all payments
router.get("/", getAllPayment);

//update all payments
router.put("/update/:id", updatePayment);

//delete a payment
router.delete("/delete/:id", deletePayment);

module.exports = router;
