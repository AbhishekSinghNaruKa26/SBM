import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    user:{ type:mongoose.Schema.ObjectId, ref:"user"  },
    city:String,
    state:String,
    country:String,
    pincode:String,
    isDefault:{type:Boolean ,default:false}
});

const addressModel = mongoose.model('address' , addressSchema);