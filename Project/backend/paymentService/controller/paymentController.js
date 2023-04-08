let Payment = require("../models/Payment");

const createPayment = async (req, res) => {
  const amount = Number(req.body.amount);
  const { itemList, userID } = req.body;

  const newPayment = new Payment({
    amount,
    itemList,
    userID,
  });

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

const getAllPayment = async (req, res) => {
  await Payment.find()
    .then((payment) => {
      res.json(payment);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updatePayment = async (req, res) => {
  const { paymentID, status } = req.body;

  const updatePayment = {
    status,
  };

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

const deletePayment = async (req, res) => {
  const { paymentID } = req.body;

  await Payment.findByIdAndDelete(paymentID)
    .then(() => {
      res.status(200).send({ status: "Payment Deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error...." });
    });
};

module.exports = {
  createPayment,
  getAllPayment,
  updatePayment,
  deletePayment,
};
