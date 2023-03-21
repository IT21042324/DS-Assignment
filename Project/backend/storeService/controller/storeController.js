let Store = require("../models/Store");

const createStore = async (req, res) => {
  const merchantid = req.body.merchantid;
  const storename = req.body.storename;
  const location = req.body.location;
  const category = req.body.category;
  const storeid = req.body.storeid;
  const storeitem = req.body.storeitem;

  const newMerchant = new Store({
    merchantid,
    storename,
    location,
    category,
    storeid,
    storeitem,
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

const getAllStore = async (req, res) => {
  await Store.find()
    .then((store) => {
      res.json(store);
    })
    .catch((err) => {
      console.log(err);
    });
};
const updateStore = async (req, res) => {
  let sid = req.params.storeid;
  const { merchantid, storename, location, category, storeid, storeitem } =
    req.body;

  const updateStore = {
    merchantid,
    storename,
    location,
    category,
    storeid,
    storeitem,
  };
  const update = await Store.findById(sid, updateStore)
    .then(() => {
      res.status(200).send({ Status: "Store updated", store: update });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error with updating data" });
    });
};

const deleteStore = async (req, res) => {
  let sid = req.params.merchantid;
  await Store.findById(sid)
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete merchant", error: err.message });
    });
};

const getOneStore = async (req, res) => {
  let sid = req.params.storeid;
  await Store.findById(sid)
    .then(() => {
      res.status(200).send({ status: "User fetched" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete merchant", error: err.message });
    });
};

module.exports = {
  createStore,
  getAllStore,
  updateStore,
  deleteStore,
  getOneStore,
};
