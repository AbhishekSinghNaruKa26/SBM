import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.ObjectId , ref:"user"},
    items:[{
        product:{type:mongoose.Schema.ObjectId , ref:"product"},
        quantity:Number,
        Price:Number
    }],

    totalAmount:Number,
    status:{type:String , enum:["pending" , "completed" , "cancelled"], default:"pending"},
    orderDate:{type:Date , default:Date.now}
});

const orderModel = mongoose.model('order',orderSchema);
export default orderModel ; 