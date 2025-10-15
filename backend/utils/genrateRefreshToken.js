import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const genrateRefreshToken = (user)=>{
    return jwt.sign(
        { id: user._id },
        process.env.JWT_REFRESH_SECRET,
        console.log("refresh:",process.env.JWT_REFRESH_SECRET),
        { expiresIn: "7d" }
    )
}