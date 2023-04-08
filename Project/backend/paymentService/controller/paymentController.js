// Importing the Payment model
let Payment = require("../models/Payment");

// This function creates a new payment and saves it to the database
const createPayment = async (req, res) => {
  const amount = Number(req.body.amount);
  const { itemList, userID } = req.body;

  // Creating a new payment object
  const newPayment = new Payment({
    amount,
    itemList,
    userID,
    storeID,
  });

  // Saving the payment object to the database
  const data = newPayment
    .save()
    .then(() => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// This function retrieves all payments from the database
const getAllPayment = async (req, res) => {
  await Payment.find()
    .then((payment) => {
      res.json(payment);
    })
    .catch((err) => {
      console.log(err);
    });
};

// This function updates a payment's status
const updatePayment = async (req, res) => {
  const { paymentID, status } = req.body;

  // Creating an object to update the payment's status
  const updatePayment = {
    status,
  };

  // Finding and updating the payment object in the database
  const update = await Payment.findOneAndUpdate(
    { _id: paymentID },
    updatePayment
  )
    .then(() => {
      res.status(200).send({ status: "Payment Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error updating data" });
    });
};

// This function deletes a payment from the database
const deletePayment = async (req, res) => {
  const { paymentID } = req.body;

  // Finding and deleting the payment object from the database
  await Payment.findByIdAndDelete(paymentID)
    .then(() => {
      res.status(200).send({ status: "Payment Deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error...." });
    });
};

// This function calculates the total payment amount for a particular store and the number of orders
const getTotalPaymentPerStore = async (req, res) => {
  const { storeID } = req.body;
  try {
    // Finding all payments for the store
    const data = await Payment.find({ storeID });
    let total = 0;
    // Calculating the total payment amount for the store
    data.map((dat) => {
      total += dat.amount;
    });

    // Sending the total payment amount and the number of orders for the store
    res.send({ total, orderCount: data.length });
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }
};

// Exporting the functions to be used in other modules
module.exports = {
  createPayment,
  getAllPayment,
  updatePayment,
  deletePayment,
  getTotalPaymentPerStore,
};
