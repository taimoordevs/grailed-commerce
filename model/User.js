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

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  streetAddress: { type: String },
  aptSuite: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  profile_image: { type: String }, // URL or file path to the department image
  zipCode: { type: String },
});

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, TOKEN_KEY, {
    expiresIn: "15d",
  });
};

export const User = mongoose.model("User", userSchema);
