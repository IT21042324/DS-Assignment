const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storesSchema = new Schema({
  merchantID: {
    type: String,
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  storeItem: {
    type: Array,
  },
});

module.exports = mongoose.model("Store", storesSchema);
