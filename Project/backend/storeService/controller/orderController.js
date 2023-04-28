let Order = require("../models/Order");

// Create a new order
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
    const data = await newOrder.save(); // Save the new order to the database
    res.json(data); // Send a JSON response containing the newly created order data
  } catch (err) {
    res.json(err.message); // Send a JSON response with the error message if there was an error saving the order to the database
  }
};

// Get all orders
const getAllOrder = async (req, res) => {
  try {
    const data = await Order.find(); // Find all orders in the database
    res.json(data); // Send a JSON response containing all the orders
  } catch (err) {
    res.send(err.message); // Send a response with the error message if there was an error getting the orders
  }
};

// Update an order
const updateOrder = async (req, res) => {
  const { orderID, status } = req.body;

  const updateStore = {
    status,
  };
  const update = await Order.findById(orderID, updateStore) // Find the order by ID and update its status
    .then(() => {
      res.status(200).send({ Status: "Order updated", order: update }); // Send a success response with the updated order data
    })
    .catch((err) => {
      res.status(500).send({ status: "Error with updating data" }); // Send an error response if there was an error updating the order
    });
};

// Get a single order by ID
const getOneOrder = async (req, res) => {
  await Order.findById(req.params.id) // Find the order by ID
    .then((order) => {
      res.status(200).send(order); // Send a JSON response with the order data
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error Fetching Order", error: err.message }); // Send an error response if there was an error getting the order
    });
};

// Get all orders for a specific store
const getAllOrderPerStore = async (req, res) => {
  try {
    // Find all orders for the specified store, excluding the itemImage field
    const orders = await Order.find({ storeID: req.params.id }).select(
      "-itemList.itemImage"
    );

    const result = orders.map((order) => ({
      ...order.toObject(),
      totalAmount: order.itemList.reduce(
        (total, item) => total + item.itemPrice * item.itemQuantity,
        0
      ),
    }));

    res.json(result); // Send a JSON response containing all the orders for the specified store
  } catch (error) {
    res.status(500).json({ error: "Failed to get orders for store" }); // Send an error response if there was an error getting the orders for the store
  }
};

// This function updates the status of an order based on the orderID
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

// This function retrieves the count of all orders for the admin dashboard
const getOrderCountForAdmin = async (req, res) => {
  try {
    const orderCount = await Order.countDocuments();
    res.json({ orderCount });
  } catch (err) {
    res.send(err.message);
  }
};

// This function retrieves all orders for all stores
const getAllStoreOrders = async (req, res) => {
  try {
    // Get all orders from MongoDB database using Mongoose, excluding the itemImage field
    const data = await Order.find().select("-itemList.itemImage");

    // Send orders in response
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
};

// This function retrieves all orders for a particular user
const getAllUserOrders = async (req, res) => {
  try {
    const data = await Order.find({ userID: req.params.id });
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
};

// This function sets the reviewed status of an order to true
const setReviewStatus = async (req, res) => {
  try {
    const data = await Order.findByIdAndUpdate(req.params.id, {
      reviewed: true,
    });
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
  setReviewStatus,
  getOrderCountForAdmin,
};
