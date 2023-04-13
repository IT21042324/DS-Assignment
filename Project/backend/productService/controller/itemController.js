const itemModel = require("../models/Item");

const getAllItems = async (req, res) => {
  try {
    const data = await itemModel.find();
    res.json(data);
  } catch (err) {
    res.send(err.message);
  }
};

const postItem = async (req, res) => {
  //pass storeName through Parameter
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

  const totalPrice = price - (price * discount) / 100;

  try {
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

    const data = await ItemModel.save();
    res.json(data);
  } catch (err) {
    res.json(err.message);
  }
};

const getOneItem = async (req, res) => {
  const { itemID } = req.body;

  try {
    const fetchedItem = itemModel.findOne({ _id: itemID });

    res.json(fetchedItem);
  } catch (err) {
    res.json(err.message);
  }
};

const updateItem = async (req, res) => {
  const itemInfo = req.body;

  try {
    let updatedInfo;

    if (itemInfo.redQuantity) {
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
      itemInfo.totalPrice =
        itemInfo.price - (itemInfo.price * itemInfo.discount) / 100;

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

const deleteItem = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedRecord = await itemModel.findByIdAndDelete(id);
    res.json(deletedRecord);
  } catch (err) {
    res.json(err.message);
  }
};

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
      res.json({ updatedInfo: data });
    }
  } catch (err) {
    res.json(err.message);
  }
};

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
