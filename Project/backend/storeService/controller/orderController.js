let Order = require("../models/Order");

const createOrder = async (req, res) => {
  const orderid = req.body.orderid;
  const userid = req.body.userid;
  const storeid = req.body.storeid;
  const merchantid = req.body.merchantid;
  const paymentid = req.body.paymentid;
  const deliveryaddress = req.body.deliveryaddress;
  const orderdate = req.body.orderdate;
  const orderstatus = req.body.orderstatus;
  const deliverydate = req.body.deliverydate;
  const delivereddate = req.body.delivereddate;
  const newOrder = new Order({
    orderid,
    userid,
    storeid,
    merchantid,
    storeid,
    paymentid,
    deliveryaddress,
    orderdate,
    orderstatus,
    deliverydate,
    delivereddate,
  });
  await newMerchant
    .save()
    .then(() => {
      res.json("Store Added");
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
  let oid = req.params.orderid;
  const {
    orderid,
    userid,
    storeid,
    merchantid,
    paymentid,
    deliveryaddress,
    orderdate,
    orderstatus,
    deliverydate,
    delivereddate,
  } = req.body;

  const updateStore = {
    orderid,
    userid,
    storeid,
    merchantid,
    storeid,
    paymentid,
    deliveryaddress,
    orderdate,
    orderstatus,
    deliverydate,
    delivereddate,
  };
  const update = await Order.findById(oid, updateStore)
    .then(() => {
      res.status(200).send({ Status: "Order updated", order: update });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error with updating data" });
    });
};

const deleteOrder = async (req, res) => {
  let oid = req.params.orderid;
  await Store.findById(oid)
    .then(() => {
      res.status(200).send({ status: "Store deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete merchant", error: err.message });
    });
};

const getOneOrder = async (req, res) => {
  let oid = req.params.orderid;
  await Order.findById(oid)
    .then(() => {
      res.status(200).send({ status: "User fetched" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete Store", error: err.message });
    });
};

module.exports = {
  createOrder,
  getAllOrder,
  updateOrder,
  deleteOrder,
  getOneOrder,
};
