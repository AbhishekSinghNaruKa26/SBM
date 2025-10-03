import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const ConnectDB = async()=>{
    if(!process.env.MONGODB_URI){
        throw new Error("Please Provide The MONGODB_URI in dotenv file ")
    }else{
       await mongoose.connect(process.env.MONGODB_URI);
        console.log("DataBase Connected Successfully");
        
    }
     
}

export default ConnectDB;