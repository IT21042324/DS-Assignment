const itemModel = require("../models/Item");

const getAllItems = async (req, res) => {
  try {
    const data = await itemModel.find(); //for latest date(newset ones on top)
    // find({reps:20}) will give all documents of reps:20
    res.json(data);
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

const postItem = async (req, res) => {
  const { itemName, description, category, price, quantity, discount } =
    req.body;

  const totalPrice = price - (price * discount) / 100;

  try {
    const ItemModel = new itemModel({
      itemName,
      description,
      category,
      price,
      quantity,
      discount,
      totalPrice,
    });

    const data = await ItemModel.save();
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }
};

const getOneItem = async (req, res) => {
  const { itemID } = req.body;

  try {
    const fetchedItem = itemModel.findOne({ _id: itemID });

    console.log(fetchedItem);
    res.json(fetchedItem);
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }
};

const updateItem = async (req, res) => {
  const { itemID, itemName, description, category, price, quantity, discount } =
    req.body;

  let totalPrice;

  if (price && discount) totalPrice = price - (price * discount) / 100;

  try {
    // const itemToBeUpdated = await itemModel.findOne({ _id: itemID });

    const updatedInfo = itemModel.findOneAndUpdate(
      { _id: itemID },
      { itemID, itemName, description, category, price, quantity, discount }
    );

    console.log(updatedInfo);
    res.json(updatedInfo);
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }
};

const deleteItem = async (req, res) => {
  const { itemID } = req.body;

  try {
    const deletedRecord = await itemModel.findByIdAndDelete(itemID);
    console.log(deletedRecord);
    res.json(deletedRecord);
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }
};

const addReview = async (req, res) => {
  //to this data is just passed as normal text. all of them
  const { review, itemID, userID, rating } = req.body; //_id is userID

  try {
    const insertReview = async (callback) => {
      const item = await itemModel.findOne({ _id: itemID });
      console.log(item);
      if (item) await callBack(item.reviews); //item.reviews is an array
    };

    insertReview();
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }

  async function callBack(descArr) {
    //an array is passed in the parameter
    descArr.push({ userID, rating, review });
    console.log(descArr);

    const data = await itemModel.findOneAndUpdate(
      { _id: itemID },
      { reviews: descArr }
    );
    console.log(data);
    res.json({ updatedInfo: data });
  }
};

const modifyReview = async (req, res) => {
  //to this data is just passed as normal text. all of them
  const { review, itemID, userID, rating } = req.body; //_id is userID

  try {
    const removeReview = async (callback) => {
      const item = await itemModel.findOne({ _id: itemID });
      console.log(item);
      if (item) await callBack(item.reviews); //item.reviews is an array
    };

    removeReview();
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }

  async function callBack(descArr) {
    //an item review array is passed in the parameter

    descArr = descArr.filter((obj) => {
      return obj.userID != userID;
    });

    descArr.push({ userID, rating, review });
    console.log(descArr);

    const data = await itemModel.findOneAndUpdate(
      { _id: itemID },
      { reviews: descArr }
    );
    console.log(data);
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
    console.log(err.message);
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
    console.log(data);
    res.json({ updatedInfo: data });
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
};
