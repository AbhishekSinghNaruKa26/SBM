import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { configDotenv } from 'dotenv';


export const genrateRefreshToken = (uid)={
    return jwt.sign({uid},process.env.JWT_REFRESH_SECRET,{expiresIn:"7d"});
}