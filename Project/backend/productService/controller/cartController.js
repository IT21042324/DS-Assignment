// Import the Cart model
const Cart = require("../models/Cart");

// Function to create a new cart
const createCart = async (req, res) => {
  const itemList = req.body.itemList;
  const userid = req.body.userid;
  const quantity = Number(req.body.quantity);
  const price = Number(req.body.price);
  const totalPrice = quantity * price;

  // Create a new Cart object with the received data
  const newCart = new Cart({
    itemList,
    userid,
    quantity,
    price,
    totalPrice,
  });

  // Save the new cart object to the database
  await newCart
    .save()
    .then(() => {
      res.json("Cart Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Function to get all carts
const getAllCart = async (req, res) => {
  // Find all cart objects in the database
  await Cart.find()
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Function to update a cart
const updateCart = async (req, res) => {
  let cid = req.params.cartid;
  const { itemList, userid, quantity, price, totalPrice } = req.body;

  const updateCart = {
    itemList,
    userid,
    quantity,
    price,
    totalPrice,
  };

  // Update the cart object in the database with the received data
  const update = await Cart.findById(cid, updateCart)
    .then(() => {
      res.status(200).send({ Status: "Cart updated", cart: update });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error with updating data" });
    });
};

// Function to delete a cart
const deleteCart = async (req, res) => {
  let cid = req.params.cartid;

  // Find the cart object in the database and delete it
  await Cart.findById(cid)
    .then(() => {
      res.status(200).send({ status: "cart deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete cart", error: err.message });
    });
};

// Function to get a single cart
const getOneCart = async (req, res) => {
  let cid = req.params.cartid;

  // Find a cart object in the database by id and return it
  await Merchant.findById(cid)
    .then(() => {
      res.status(200).send({ status: "User fetched" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete cart", error: err.message });
    });
};

module.exports = {
  createCart,
  getAllCart,
  updateCart,
  deleteCart,
  getOneCart,
};
