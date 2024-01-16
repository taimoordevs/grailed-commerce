import mongoose from "mongoose";

const storeSchema  = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],

});

const Store = mongoose.model("Store", storeSchema );

export default Store;
