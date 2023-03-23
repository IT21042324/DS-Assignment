const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storesSchema = new Schema({
  storeid: {
    type: String,
    required: true,
  },
  merchantid: {
    type: String,
    required: true,
  },
  storename: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  storeitem: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Store", storesSchema);
