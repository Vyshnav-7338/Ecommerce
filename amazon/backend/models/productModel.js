const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    slug: { type: String, require: true, unique: true },
    image: { type: String, require: true },
    brand: { type: String, require: true },
    category: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: String, require: true },
    countInStock: { type: String, require: true },
    rating: { type: String, require: true },
    numReviews: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

