import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String }, // URL or file path to the department image
  departmentID: { type: String, required: true, unique: true }, // Assuming departmentID is a unique identifier
  // Add other department-related fields as needed
});

const Department = mongoose.model("Department", departmentSchema);

export default Department;
