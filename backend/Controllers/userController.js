import sendEmail from "../Config/sendEmail.js";
import userModel from "../Models/userModel.js";
import { sendEmailOtp } from "../utils/sendEmailTemplate.js";


export const saveFirebaseUserController = async(req,res)=>{
    try {

        const {phoneNumber} = req.body;
        const {uid} = req.firebaseUser;


console.log("Firebase user:", req.firebaseUser);


        if(!phoneNumber){
            return res.status(400).json({
                message:"Phone number Is Required",
                error:true,
                success:false
            })
        }

        const existingUser = await userModel.findOne({uid});

        if(existingUser){
            return res.status(200).json({
                message:"user already Resisterd, Logged In Successfully",
                success:true,
                error:false,
                user:existingUser

            })
        }

        const newUser = new userModel({uid , phoneNumber});
        const save = await newUser.save();

        res.status(201).json({
            message:"user Registered Successfully",
            error:false,
            success:true,
            user:save
        })

        
    } catch (error) {
        return res.status(500).json({
            message:error.message || error ,
            success:false,
            error:true
        })
    }
}


// email sendotp controller 

export  const sendEmailOtpController =async (req,res)=>{
    try {
        
        const {email} = req.body;

        if(!email){
            return res.status(400).json({
                message:"please Provide The Email",
                success:false,
                error:true
            })
        }

        // otp gentrate
        const otp = Math.floor(100000 + Math.random() * 900000);
        const expiry = Date.now() + 5 *60*1000; // 5min expiry

        //fimd and create user
        let user = await userModel.findOne({email});
        if(!user){
            user = new userModel({email})
        }

        //save otp and expiry 
        user.forgot_password_otp=otp;
        user.forgot_password_expiry=expiry;
        await user.save();

        // send Email
        await sendEmail(email,"Your Otp Code", sendEmailOtp(otp));

        res.status(200).json({
            message:"Otp Send SuccessFully",
            success:true,
            error:false
        })


    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            success:false,
            error:true
        })
    }
}

//verfiy Otp Controller

export const verifyOtpController = async(req,res)=>{
    try {
        
        const {email , otp}= req.body;

        if(!email || !otp ){
            return res.status(400).json({
                message:"Email and Otp Is Required",
                success:false,
                error:true
            })
        }

        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"User Not Found",
                success:false,
                error:true
            })
        };

        if(user.forgot_password_otp != otp){
            return res.status(400).json({
                message:"Invalid Otp",
                success:false,
                error:true
            })
        };

        if(Date.now()>user.forgot_password_expiry){
            return res.status(400).json({
                message:"Otp Expired",
                success:false,
                error:true
            })
        };

        // otp verified => clear otp & expiry
        user.forgot_password_expiry= null;
        user.forgot_password_otp= null;
         await user.save();

         return res.status(200).json({
            message:"OTP Verified Successfully",
            success:true,
            error:false,
            user

         })



    } catch (error) {
        return res.status(500).json({
            message:error.message || error,
            success:false,
            error:true
        })
    }
}