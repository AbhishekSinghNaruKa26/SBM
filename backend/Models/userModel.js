import mongoose, { mongo } from 'mongoose';


const userSchema = new mongoose.Schema({
    userName:{
        type:String,
<<<<<<< HEAD
        required:[false, "Provide UserName"]
    },
    email:{
        type:String,
        required:[false,"Provide Email"],
        unique:true,
        sparse: true
    },
    password:{
        type:String,
        required:[false, "Provide Password"]
    },
    phoneNumber: {
    type: String,
    unique: true,
    sparse: true
=======
        required:[true, "Provide UserName"]
    },
    email:{
        type:String,
        required:[true,"Provide Email"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Provide Password"]
    },
    mobile:{
        type:Number,
>>>>>>> allcode
    },
    gender:{
        type:String,
        enum:["Male", "Female","Other"]
    },
    refresh_token:{
        type:String,
        default:null
    },
    verfiy_email:{
        type:Boolean,
        default:false
    },
    last_login_date:{
        type:Date,
        default:null
    },
    forgot_password_otp:String,
    forgot_password_expiry:String,
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
<<<<<<< HEAD
    uid: {
    type: String,
    unique: true,
    sparse: true // sparse allows multiple nulls
    },

=======
>>>>>>> allcode

    // Relations

    address_deatils:[{type:mongoose.Schema.ObjectId , ref:"address"}],

    cart:{type:mongoose.Schema.ObjectId , ref:"cart"},

    order_history:[{type:mongoose.Schema.ObjectId , ref:"order"}],

    


     
},{timestamps:true})

const userModel = mongoose.model('user',userSchema);

export default userModel;

