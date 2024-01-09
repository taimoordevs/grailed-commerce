import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { User } from "../model/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";
import cloudinary from "cloudinary";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

export const uploadVideos = upload.single("video");

cloudinary.v2.config({
  cloud_name: "ddu4sybue",
  api_key: "658491673268817",
  api_secret: "w35Ei6uCvbOcaN4moWBKL3BmW4Q",
});

// Add User Phone Number
export const testRoute = catchAsyncError(async (req, res, next) => {
  res.send("Hey");
});
