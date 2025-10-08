import mongoose, { mongo } from "mongoose";

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "user" },
  items: [
    {
      product: { type: mongoose.Schema.ObjectId, ref: "product" },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const cartModel = mongoose.model("cart", cartSchema);
export default cartModel;
