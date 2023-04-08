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
  merchantID: {
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
    default: "Processing",
  },
  deliveredDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Order", ordersSchema);
