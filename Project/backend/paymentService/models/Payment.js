const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  itemList: {
    type: Array,
    default: [],
  },
  userID: { type: String, required: true },
  status: {
    type: String,
    default: "Processing",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model("Payment", paymentSchema);
