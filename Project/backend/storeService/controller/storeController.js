let Store = require("../models/Store");

const createStore = async (req, res) => {
  const { storeName, location, merchantID } = req.body;

  const newStore = new Store({
    storeName,
    merchantID,
    location,
  });
  await newStore
    .save()
    .then(() => {
      console.log(newStore);
      res.json(newStore);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getAllStore = async (req, res) => {
  await Store.find()
    .then((store) => {
      res.json(store);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//To update basic store info details
const updateStore = async (req, res) => {
  const { storeName, location, storeID } = req.body;

  const updateStore = {
    storeName,
    location,
  };

  try {
    const updatedStore = await Store.findOneAndUpdate(
      { _id: storeID },
      updateStore,
      { new: true }
    );

    res.send(updatedStore);
  } catch (err) {
    res.send(err.message);
  }
};

const deleteStore = async (req, res) => {
  const { storeID } = req.body;

  await Store.findOneAndDelete({ _id: storeID })
    .then(() => {
      res.send({ status: "Store deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res.send(err.message);
    });
};

const getOneStore = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Store.findById(id);
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const getStoreItemCount = async (req, res) => {
  const storeID = req.params.id;

  try {
    const data = await Store.findOne({ _id: storeID });

    res.json({ itemCount: data.storeItem.length });
  } catch (err) {
    res.send(err.message);
  }
};

const addStoreItem = async (req, res) => {
  const { item, storeID } = req.body;

  try {
    const store = await Store.findOne({ _id: storeID });

    var itemArray = store.storeItem;

    itemArray.push(item);

    const updatedStore = await Store.findOneAndUpdate(
      { _id: storeID },
      { storeItem: itemArray },
      { new: true }
    );

    console.log(updatedStore);
    res.send(updatedStore);
  } catch (err) {
    res.send(err.message);
  }
};

const deleteStoreItem = async (req, res) => {
  const { storeID, itemID } = req.body;

  try {
    const store = await Store.findOne({ _id: storeID });

    const itemArray = store.storeItem;

    var newArray = itemArray.filter((itm) => itm._id !== itemID);

    const updatedStore = await Store.findOneAndUpdate(
      { _id: storeID },
      { storeItem: newArray },
      { new: true }
    );

    console.log(updatedStore);
    res.send(updatedStore);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  createStore,
  getAllStore,
  updateStore,
  deleteStore,
  getOneStore,
  getStoreItemCount,
  addStoreItem,
  deleteStoreItem,
};
