import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String }, // URL or file path to the subcategory image
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
  // Add other subcategory-related fields as needed
});

const Subcategory = mongoose.model("Subcategory", subcategorySchema);

export default Subcategory;
