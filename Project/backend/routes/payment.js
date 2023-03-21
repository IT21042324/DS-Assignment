const router = require("express").Router();

const {
    createPayment,
    //getPayment,
    deletePayment,
    updatePayment,
} = require("../controller/paymentController");

//create a new payment
router.post("/add", createPayment);

//get all payments
//router.get("/", getPayment);

//update all payments
router.put("/update/:id", updatePayment);

//delete a payment
router.delete("/delete/:id", deletePayment);

module.exports = router;
