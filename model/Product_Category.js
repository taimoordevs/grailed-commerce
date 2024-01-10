import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { TOKEN_KEY } from "../config/index.js";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const GalleryItemSchema = new Schema({
  publicId: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  departmentID: { type: String, required: true }, // Assuming departmentID is a unique identifier
  // Add other category-related fields as needed
  image: { type: String }, // URL or file path to the department image
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Category = mongoose.model("Category", CategorySchema);
