import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String }, // URL or file path to the department image
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

const Department = mongoose.model("Department", departmentSchema);

export default Department;
