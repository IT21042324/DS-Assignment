const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const merchantsSchema = new Schema({
  merchantid: {
    type: String,
    required: true,
  },
  merchantname: {
    type: String,
    required: true,
  },
  contactno: {
    type: Number,
    required: true,
  },
  address: {
    type: Number,
    required: true,
  },
  storeid: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Merchant", merchantsSchema);
