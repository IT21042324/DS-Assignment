const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartsSchema = new Schema({
  itemList: {
    type: Array,
    default: [],
  },
  userid: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
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
});

module.exports = mongoose.model("Carts", cartsSchema);
