const itemModel = require("../models/Item");

// Get all items
const getAllItems = async (req, res) => {
  try {
    const data = await itemModel.find();
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
};

// Add a new item
const postItem = async (req, res) => {
  // Get item details from request body
  const {
    itemName,
    image,
    storeName,
    description,
    category,
    price,
    quantity,
    discount,
    storeID,
  } = req.body;

  // Calculate total price after discount
  const totalPrice = price - (price * discount) / 100;

  try {
    // Create a new item model
    const ItemModel = new itemModel({
      itemName,
      description,
      image,
      category,
      price,
      quantity,
      discount,
      totalPrice,
      storeName,
      storeID,
    });

    // Save the new item to the database
    const data = await ItemModel.save();
    res.json(data);
  } catch (err) {
    res.json(err.message);
  }
};

// Get one item by ID
const getOneItem = async (req, res) => {
  // Get item ID from request body
  const { itemID } = req.body;

  try {
    // Find the item in the database using its ID
    const fetchedItem = itemModel.findOne({ _id: itemID });

    res.json(fetchedItem);
  } catch (err) {
    res.json(err.message);
  }
};

// Update an item
const updateItem = async (req, res) => {
  // Get item information from request body
  const itemInfo = req.body;

  try {
    let updatedInfo;

    if (itemInfo.redQuantity) {
      // Reduce item quantity if redQuantity is provided
      const { quantity } = await itemModel.findById(
        itemInfo.itemID,
        "quantity"
      );

      if (quantity < itemInfo.redQuantity) {
        throw new Error("Not enough stock available");
      }

      updatedInfo = await itemModel.findByIdAndUpdate(
        itemInfo.itemID,
        { $inc: { quantity: -itemInfo.redQuantity } },
        { new: true }
      );
    } else {
      // Calculate total price after discount
      itemInfo.totalPrice =
        itemInfo.price - (itemInfo.price * itemInfo.discount) / 100;

      // Update item details in the database
      updatedInfo = await itemModel.findByIdAndUpdate(
        itemInfo.itemID,
        itemInfo,
        { new: true }
      );
    }

    return res.json(updatedInfo);
  } catch (err) {
    res.json(err.message);
  }
};

// Delete an item by ID
const deleteItem = async (req, res) => {
  const id = req.params.id;

  try {
    // Find the item in the database and delete it
    const deletedRecord = await itemModel.findByIdAndDelete(id);
    res.json(deletedRecord);
  } catch (err) {
    res.json(err.message);
  }
};

//add a review for an item
const addReview = async (req, res) => {
  //to this data is just passed through the body (all of them)
  const { review, itemID, userID, userName, rating } = req.body; //_id is userID

  try {
    const insertReview = async (callback) => {
      const item = await itemModel.findOne({ _id: itemID });
      if (item) await callback(item.reviews); //item.reviews is an array
    };

    await insertReview(callBack);

    async function callBack(descArr) {
      //an array is passed in the parameter

      descArr.push({ userID, userName, rating, review });

      const data = await itemModel.findOneAndUpdate(
        { _id: itemID },
        { reviews: descArr }
      );
      res.json(data);
    }
  } catch (err) {
    res.json(err.message);
  }
};

//update a review for an item
const modifyReview = async (req, res) => {
  //to this data is just passed as normal text. all of them
  const { review, itemID, userID, userName, rating } = req.body; //_id is userID

  try {
    const removeReview = async (callback) => {
      const item = await itemModel.findOne({ _id: itemID });
      if (item) await callBack(item.reviews); //item.reviews is an array
    };

    removeReview();
  } catch (err) {
    res.json(err.message);
  }

  async function callBack(descArr) {
    //an item review array is passed in the parameter

    descArr = descArr.filter((obj) => {
      return obj.userID != userID;
    });

    descArr.push({ userID, userName, rating, review });

    const data = await itemModel.findOneAndUpdate(
      { _id: itemID },
      { reviews: descArr }
    );
    res.json({ updatedInfo: data });
  }
};

//delete a review for an item
const deleteReview = (req, res) => {
  //to this data is just passed as normal text. all of them
  const { itemID, userID } = req.body; //_id is userID

  try {
    const removeReview = async (callback) => {
      const item = await itemModel.findOne({ _id: itemID });
      if (item) await callBack(item.reviews); //item.reviews is an array
    };

    removeReview();
  } catch (err) {
    res.json(err.message);
  }

  async function callBack(descArr) {
    // item review array is passed in the parameter

    descArr = descArr.filter((obj) => {
      return obj.userID != userID;
    });

    const data = await itemModel.findOneAndUpdate(
      { _id: itemID },
      { reviews: descArr }
    );
    res.json({ updatedInfo: data });
  }
};

//delete all store items
const deleteAllItemsFromStore = async function (req, res) {
  try {
    const data = await itemModel.deleteMany({ storeID: req.params.id });
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  postItem,
  addReview,
  getAllItems,
  getOneItem,
  deleteItem,
  modifyReview,
  deleteReview,
  updateItem,
  deleteAllItemsFromStore,
};
