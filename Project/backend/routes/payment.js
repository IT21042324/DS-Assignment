const router = require("express").Router();

const {
    createPayment,
    getAllPayment,
    deletePayment,
    updatePayment,
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
