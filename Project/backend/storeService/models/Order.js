const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  storeID: {
    type: String,
    required: true,
  },
  paymentID: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  orderedDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Pending",
  },
  deliveredDate: {
    type: Date,
  },
  itemList: {
    type: Array,
  },
  reviewed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Order", ordersSchema);
