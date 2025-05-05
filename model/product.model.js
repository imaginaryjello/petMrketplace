const mongoose = require("mongoose");

// Define Product Schema
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    image: { type: String }, // URL to product image
  },
  { timestamps: true }
);

// Export Product Model
module.exports = mongoose.model("Product", productSchema);
