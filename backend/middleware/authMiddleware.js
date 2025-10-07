import admin from "../Config/firebaseAdmin.js";

const verifyFirebaseToken = async (req, res, next) => {
    try {
        console.log("Authorization header:", req.headers.authorization);
console.log("Firebase user:", req.firebaseUser);

        // Token from header or body
        const authHeader = req.headers.authorization;
        const token = req.body.token || (authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null);

        if (!token) {
            return res.status(400).json({
                message: "No Token Provided",
                success: false,
                error: true
            });
        }

        // Verify token
        const decode = await admin.auth().verifyIdToken(token);
        if (!decode) {
            return res.status(401).json({
                message: "Unauthorized Access",
                success: false,
                error: true
            });
        }

        req.firebaseUser = decode; // ✅ attach to request
        next();
    } catch (error) {
        console.error("Firebase verify error:", error);
        return res.status(500).json({
            message: error.message || error,
            success: false,
            error: true
        });
    }
};

export default verifyFirebaseToken;
