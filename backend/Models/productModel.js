import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    productName :{
        type:String,
        required:[true , "Please Provide The Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Provide The Product Description "],
    },
    price:{
        type:Number,
        required:[true , "Please Provide The Price Of Product"]
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        required:[true , "Please Provide category"]
    },
    image:[
        {
        url:String,
        public_id:String
        }
     ],

     createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
     }
},{timestamps:true});

const productModel = mongoose.model('product' ,  productSchema);
export default productModel ;