import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const genrateAccessToken = (uid)=>{
    return jwt.sign(uid,process.env.JWT_SECRET,{expiresIn:"7h"})
}