const mongoose = require("mongoose");

const Product = mongoose.model("Product", {
  name: String,
  price: String,
  category: String,
  userId: String,
  company: String,
});

module.exports = Product
