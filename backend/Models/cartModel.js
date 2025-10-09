import mongoose, { mongo } from "mongoose";

const cartSchema = new mongoose.Schema({
<<<<<<< HEAD
    user:{type:mongoose.Schema.ObjectId , ref:"user"},
    items:[
        {
            product:{type:mongoose.Schema.ObjectId , ref:"product"},
            quantity:{type:Number , default:1}
        }
    ]
});

const cartModel = mongoose.model('cart' , cartSchema);
export default cartModel;
=======
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
>>>>>>> allcode
