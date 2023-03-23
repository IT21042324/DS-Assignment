let Store = require("../models/Store");

const createStore = async (req, res) => {
  const storename = req.body.storename;
  const location = req.body.location;
  const category = req.body.category;
  const storeitem = req.body.storeitem;

  const newStore = new Store({
    storename,
    location,
    category,
    storeitem,
  });
  await newStore
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
  const { storeid } = req.body;
  const { storename, location, category, storeitem } = req.body;

  const updateStore = {
    storeid,
    storename,
    location,
    category,
    storeitem,
  };
  const update = await Store.findById(storeid, updateStore)
    .then(() => {
      res.status(200).send({ Status: "Store updated", store: update });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error with updating data" });
    });
};

const deleteStore = async (req, res) => {
  const { storeid } = req.body;

  await Store.findById(storeid)
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
  const { storeid } = req.body;
  await Store.findById(storeid)
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
  createStore,
  getAllStore,
  updateStore,
  deleteStore,
  getOneStore,
};
