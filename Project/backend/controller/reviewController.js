const reviewModel = require("../models/Review");
const mongoose = require("mongoose");

const getAllReview = async (req, res) => {
  try {
    const data = await reviewModel.find(); //for latest date(newset ones on top)
    // find({reps:20}) will give all documents of reps:20
    res.json(data);
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

const getReviewByItem = async (req, res) => {
  const { itemID } = req.params;

  try {
    const data = await reviewModel.find({ itemID });

    res.json(data);
    console.log(data);
  } catch (err) {
    console.log(err);
    res.json(err.message);
  }
};

//postReview Mtd is wrong
const postReview = async (req, res) => {
  // const userId = req.user._id;
  const userID = "2134";

  // const { userName } = req.user;
  const { itemID, rating, description } = req.body;
  // let errorArray = [];

  const rev = await reviewModel.findOne({ itemID });

  let des;
  if (rev) {
    //for the very first review
    des = rev.description;

    const newRevObj = { userID, description };
    des.push(newRevObj);
    console.log(des);
  } else des = [];

  try {
    const ReviewModel = new reviewModel({
      itemID,
      rating,
      description: des,
    });
    const data = await ReviewModel.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err.message);
    console.log(err.message);
  }
};

module.exports = {
  postReview,
  getAllReview,
  getReviewByItem,
};
