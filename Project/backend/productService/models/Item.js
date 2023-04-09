const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  storeID: {
    type: String,
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Array,
    default: [],
  }, //retings are taken as an overall rating from each reviewer
});

module.exports = mongoose.model("Items", itemsSchema);
