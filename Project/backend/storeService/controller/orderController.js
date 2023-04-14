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
    res.json(data);
  } catch (err) {
    res.json(err.message);
  }
};

const getAllOrder = async (req, res) => {
  try {
    const data = await Order.find();
    res.json(data);
  } catch (err) {
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
  await Order.findById(req.params.id)
    .then((order) => {
      res.status(200).send(order);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error Fetching Order", error: err.message });
    });
};

const getAllOrderPerStore = async (req, res) => {
  try {
    const orders = await Order.find({ storeID: req.params.id });

    const result = orders.map((order) => ({
      ...order.toObject(),
      totalAmount: order.itemList.reduce(
        (total, item) => total + item.itemPrice * item.itemQuantity,
        0
      ),
    }));

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to get orders for store" });
  }
};

const updateOrderStatus = async (req, res) => {
  const { orderID, status } = req.body;

  try {
    const data = await Order.findByIdAndUpdate(
      orderID,
      { status },
      { new: true }
    );
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
};

const getOrderCountForAdmin = async (req, res) => {
  try {
    const orderCount = await Order.countDocuments();
    res.json({ orderCount });
  } catch (err) {
    res.send(err.message);
  }
};

const getAllStoreOrders = async (req, res) => {
  try {
    const data = await Order.find();
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
};

const getAllUserOrders = async (req, res) => {
  try {
    const data = await Order.find({ userID: req.params.id });
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
  getAllUserOrders,
  getAllStoreOrders,
  getAllOrderPerStore,
  updateOrderStatus,
  getOrderCountForAdmin,
};
