const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  orderid: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  storeid: {
    type: String,
    required: true,
  },
  merchantid: {
    type: String,
    required: true,
  },
  paymentid: {
    type: String,
    required: true,
  },
  deliveryaddress: {
    type: String,
    required: true,
  },
  orderdate: {
    type: Date,
    required: true,
  },
  orderstatus: {
    type: String,
    required: true,
  },
  deliverydate: {
    type: Date,
    required: true,
  },
  delivereddate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Order", ordersSchema);
