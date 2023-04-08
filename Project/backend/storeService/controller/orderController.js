let Order = require("../models/Order");

const createOrder = async (req, res) => {
  const { userID, merchantID, storeID, paymentID, address } = req.body;

  const newOrder = new Order({
    userID,
    merchantID,
    storeID,
    paymentID,
    address,
  });
  await newOrder
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllOrder = async (req, res) => {
  await Order.find()
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateOrder = async (req, res) => {
  const { orderID, status } = req.body;

  const updateStore = {
    status,
  };
  const update = await Order.findById(orderID, updateStore)
    .then(() => {
      res.status(200).send({ Status: "Order updated", order: update });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error with updating data" });
    });
};

const getOneOrder = async (req, res) => {
  const { orderID } = req.body;

  await Order.findById(orderID)
    .then((order) => {
      res.status(200).send(order);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error Fetching Order", error: err.message });
    });
};

module.exports = {
  createOrder,
  getAllOrder,
  updateOrder,
  getOneOrder,
};
