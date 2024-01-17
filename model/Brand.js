import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String }, // URL or file path to the logo image
  image: { type: String }, // URL or file path to the brand image
  description: { type: String },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
