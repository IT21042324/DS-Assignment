let Order = require("../models/Order");

const createOrder = async (req, res) => {
  const { userID, storeID, paymentID, address, itemList } = req.body;

  const newOrder = new Order({
    userID,
    paymentID,
    address,
    storeID,
    itemList,
  });

  try {
    const data = await newOrder.save();
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }
};

const getAllOrder = async (req, res) => {
  try {
    const data = await Order.find();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
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

const getAllOrderPerStore = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Order.find({ storeID: id });
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  createOrder,
  getAllOrder,
  updateOrder,
  getOneOrder,
  getAllOrderPerStore,
};
