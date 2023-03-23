const Cart = require("../models/Cart");

const createCart = async (req, res) => {
  const itemList = req.body.itemList;
  const userid = req.body.userid;
  const quantity = Number(req.body.quantity);
  const price = Number(req.body.price);
  const totalPrice = quantity * price;

  const newCart = new Cart({
    itemList,
    userid,
    quantity,
    price,
    totalPrice,
  });
  await newCart
    .save()
    .then(() => {
      res.json("Cart Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllCart = async (req, res) => {
  await Cart.find()
    .then((cart) => {
      res.json(cart);
    })
    .catch((err) => {
      console.log(err);
    });
};
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
  const update = await Cart.findById(cid, updateCart)
    .then(() => {
      res.status(200).send({ Status: "Cart updated", cart: update });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error with updating data" });
    });
};

const deleteCart = async (req, res) => {
  let cid = req.params.cartid;
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

const getOneCart = async (req, res) => {
  let cid = req.params.cartid;
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
