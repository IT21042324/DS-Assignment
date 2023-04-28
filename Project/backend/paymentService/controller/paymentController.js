// Importing the Payment model
let Payment = require("../models/Payment");

// This function creates a new payment and saves it to the database
const createPayment = async (req, res) => {
  const amount = Number(req.body.amount);
  const { itemList, userID, storeID } = req.body;

  // Creating a new payment object
  const newPayment = new Payment({
    amount,
    itemList,
    userID,
    storeID,
  });

  // Saving the payment object to the database

  try {
    const data = await newPayment.save();
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
};

// This function retrieves all payments from the database
const getAllPayment = async (req, res) => {
  await Payment.find()
    .then((payment) => {
      res.json(payment);
    })
    .catch((err) => {
      res.send(err.message);
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
    updatePayment,
    { new: true }
  )
    .then(() => {
      res.status(200).json(update);
    })
    .catch((err) => {
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
      res.status(500).send({ status: "Error...." });
    });
};

// This function calculates the total payment amount for a particular store and the number of orders
const getTotalPaymentPerStore = async (req, res) => {
  const storeID = req.params.id;
  try {
    const results = await Payment.aggregate([
      { $match: { "itemList.storeID": storeID } },
      { $unwind: "$itemList" },
      { $match: { "itemList.storeID": storeID } },
      {
        $group: {
          _id: "$_id",
          totalAmount: {
            $sum: {
              $multiply: ["$itemList.itemPrice", "$itemList.itemQuantity"],
            },
          },
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$totalAmount" },
          orderCount: { $sum: 1 },
        },
      },
    ]);

    if (results.length > 0) {
      const { totalAmount, orderCount } = results[0];
      res.send({ total: totalAmount, orderCount });
    } else {
      res.send({ total: 0, orderCount: 0 });
    }
  } catch (err) {
    res.json(err.message);
  }
};

const updatePaymentStatus = async (req, res) => {
  const { paymentID, status } = req.body;

  try {
    const data = await Payment.findByIdAndUpdate(
      paymentID,
      { status },
      { new: true }
    );
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
};

const getTotalPaymentForAdmin = async (req, res) => {
  try {
    const result = await Payment.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
        },
      },
      {
        $project: {
          _id: 0,
          amountForStore: { $multiply: ["$totalAmount", 0.15] },
        },
      },
    ]);

    res.json(result[0]);
  } catch (err) {
    res.send(err.message);
  }
};

// Exporting the functions to be used in other modules
module.exports = {
  createPayment,
  getAllPayment,
  updatePayment,
  deletePayment,
  getTotalPaymentPerStore,
  updatePaymentStatus,
  getTotalPaymentForAdmin,
};
