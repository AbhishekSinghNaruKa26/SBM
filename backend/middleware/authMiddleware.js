import admin from "../Config/firebaseAdmin.js";
import jwt from 'jsonwebtoken';


 const verifyUserAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided",
        success: false,
        error: true,
      });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
        success: false,
        error: true,
      });
    }

    // 🔹 Try Firebase Verification
    try {
      const decodedFirebase = await admin.auth().verifyIdToken(token);
      req.user = {
        uid: decodedFirebase.uid,
        authType: "firebase",
        email: decodedFirebase.email || null,
      };
      return next();
    } catch (firebaseErr) {
      // 🔹 If Firebase fails, try JWT
      try {
        const decodedJWT = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
          id: decodedJWT.id,
          email: decodedJWT.email || null,
          authType: "jwt",
        };
        return next();
      } catch (jwtErr) {
        return res.status(401).json({
          message: "Invalid token",
          success: false,
          error: true,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

export default verifyUserAuth;
