import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide The Product Name"],
      trim: true,
    },
    company: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      required: [true, "Please Provide The Product Description "],
    },
    vendor: {
      type: String,
      required: [true, "Please Provide The Product Description "],
    },
    tags: {
      type: String,
      required: [true, "Please Provide The Product Description "],
    },
    rating: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      required: [true, "Please Provide The Price Of Product"],
    },
    orignal: {
      type: String,
      require: true,
    },
    // stock: {
    //   type: Number,
    //   default: 0,
    // },
    category: {
      type: String,
      required: [true, "Please Provide category"],
    },
    img: {
      type: String,
      require: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);
export default productModel;
