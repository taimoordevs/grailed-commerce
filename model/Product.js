import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  departmentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategory",
    required: true,
  },
  subcategoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategory",
    required: true,
  },
  name: { type: String, required: true },
  images: [{ type: String }], // Array of URLs or file paths for multiple images
  price: { type: Number, required: true },
  size: { type: String },
  color: { type: String },
  condition: { type: String },
  description: { type: String },
  tags: [{ type: String }], // Array of tags
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Array of user IDs who liked the product
  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Array of user IDs who disliked the product
  // Add other product-related fields as needed
});

const Product = mongoose.model("Product", productSchema);

export default Product;
