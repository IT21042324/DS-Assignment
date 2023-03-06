const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    itemID: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    description: {
      type: Array,
      default: [], //{reviewer,review}
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
