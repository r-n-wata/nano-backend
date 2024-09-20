// models/reviewModel.js
const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  clientName: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }, // Rating from 1 to 5
  createdAt: { type: Date, default: Date.now },
});

module.exports = model("Review", reviewSchema);
