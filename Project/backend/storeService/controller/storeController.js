// Importing Store model
let Store = require("../models/Store");

// Creating a new store in the database
const createStore = async (req, res) => {
  const { storeName, location, merchantID } = req.body;

  // Creating a new Store object with the provided data
  const newStore = new Store({
    storeName,
    merchantID,
    location,
  });

  // Saving the new store to the database
  await newStore
    .save()
    .then(() => {
      // Sending the newly created store object as response
      res.json(newStore);
    })
    .catch((err) => {
      // If there is an error, logging the error message and sending it as response
      console.log(err.message);
      res.send(err.message);
    });
};

// Getting all stores from the database
const getAllStore = async (req, res) => {
  await Store.find()
    .then((store) => {
      // Sending all store objects as response
      res.json(store);
    })
    .catch((err) => {
      // If there is an error, sending the error message as response
      res.send(err.message);
    });
};

// Updating basic store info details
const updateStore = async (req, res) => {
  const { storeName, location, storeID } = req.body;

  // Creating an object with the updated values
  const updateStore = {
    storeName,
    location,
  };

  try {
    // Finding the store by the given ID and updating the store details with the new values
    const updatedStore = await Store.findOneAndUpdate(
      { _id: storeID },
      updateStore,
      { new: true }
    ); // Sending the updated store object as response
    res.send(updatedStore);
  } catch (err) {
    // If there is an error, sending the error message as response
    res.send(err.message);
  }
};

// Deleting a store from the database
const deleteStore = async (req, res) => {
  try {
    // Finding the store by the given ID and deleting it from the database
    const data = await Store.findByIdAndDelete(req.params.id);
    // Sending the deleted store object as response
    res.json(data);
  } catch (err) {
    // If there is an error, sending the error message as response
    res.send(err.message);
  }
};

// Getting a store by ID
const getOneStore = async (req, res) => {
  const id = req.params.id;

  try {
    // Finding the store by the given ID, excluding the image field
    const data = await Store.findById(id).select("-storeItem.image");
    res.json(data);
  } catch (err) {
    // If there is an error, sending the error message as response
    res.send(err.message);
  }
};

// Getting the description of a store by ID
const getStoreDescription = async (req, res) => {
  try {
    // Finding the store by the given ID and selecting the 'description' field
    const data = await Store.findById(req.params.id, { description });
    // Sending the store's description as response
    res.json(data);
  } catch (err) {
    // If there is an error, sending the error message as response
    res.send(err.message);
  }
};

//get the itemCount from store
const getStoreItemCount = async (req, res) => {
  const storeID = req.params.id;

  try {
    // Find the store with the specified ID, excluding the itemImage field
    const data = await Store.findOne({ _id: storeID }).select(
      "-storeItem.itemImage"
    );

    res.json({ itemCount: data.storeItem.length });
  } catch (err) {
    res.send(err.message);
  }
};

//add items to store
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

    res.send(updatedStore);
  } catch (err) {
    res.send(err.message);
  }
};

//modify the items in the store
const modifyStoreItem = async (req, res) => {
  const { item, storeID } = req.body;

  try {
    const store = await Store.findOne({ _id: storeID });

    var itemArray = store.storeItem;

    var itemArray = itemArray.map((itm) => {
      if (itm._id === item._id) {
        // Replace elements in itm with elements from item
        return Object.assign({}, itm, item);
      } else {
        // Return original object
        return itm;
      }
    });

    const updatedStore = await Store.findOneAndUpdate(
      { _id: storeID },
      { storeItem: itemArray },
      { new: true }
    );

    res.send(updatedStore);
  } catch (err) {
    res.send(err.message);
  }
};

//delete item from store
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

    res.send(updatedStore);
  } catch (err) {
    res.send(err.message);
  }
};

//add store review
const addReview = async (req, res) => {
  //to this data is just passed through the body (all of them)
  const { review, storeID, userID, userName, rating } = req.body; //_id is userID

  try {
    const insertReview = async (callback) => {
      const store = await Store.findOne({ _id: storeID });
      if (store) await callback(store.reviews); //item.reviews is an array
    };

    await insertReview(callBack);

    async function callBack(descArr) {
      //an array is passed in the parameter

      descArr.push({ userID, userName, rating, review });

      const data = await Store.findOneAndUpdate(
        { _id: storeID },
        { reviews: descArr }
      );
      res.json(data);
    }
  } catch (err) {
    res.json(err.message);
  }
};

//exporting necessary functions to be used in the route file
module.exports = {
  createStore,
  getAllStore,
  updateStore,
  addReview,
  deleteStore,
  getOneStore,
  getStoreItemCount,
  addStoreItem,
  deleteStoreItem,
  modifyStoreItem,
};
