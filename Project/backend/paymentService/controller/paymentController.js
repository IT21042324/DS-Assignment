let Payment = require("../models/Payment");

const createPayment = async (req, res) => {
  const amount = Number(req.body.amount);
  const itemList = req.body.itemList;

  const newPayment = new Payment({
    amount,
    itemList,
  });

  newPayment
    .save()
    .then(() => {
      res.json("Payment added successfully");
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
  let Id = req.params.id;
  const { amount, itemList } = req.body;

  const updatePayment = {
    amount,
    itemList,
  };

  const update = await Payment.findByIdAndUpdate(Id, updatePayment)
    .then(() => {
      res.status(200).send({ status: "Payment Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
    });
};

const deletePayment = async (req, res) => {
  let Id = req.params.id;

  await Payment.findByIdAndDelete(Id)
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
