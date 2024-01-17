import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  departmentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  brandID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true, // Make brand field required
  },
  subcategoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subcategory",
    required: true,
  },
  name: { type: String, required: true },
  images: { type: [String], required: true },
  regularPrice: { type: Number, default: 0 },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  salePrice: { type: Number },
  discount: { type: Number },
  size: { type: String },
  color: { type: String },
  condition: { type: String },
  description: { type: String },
  tags: { type: [String] },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
