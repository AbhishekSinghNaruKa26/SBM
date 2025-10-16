import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import ConnectDB from "./Config/ConnectDB.js";
import router from "./Router/router.js";

const app = express();
const allowedOrigins = ["http://localhost:5173", "https://sbm-ten.vercel.app"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ CORS blocked for origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan());
app.use(cookieParser());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    message: "Server Is Running On The PORT" + PORT,
  });
});

app.use("/sbm", router);

ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Sever Is Running On The PORT :", PORT);
  });
});
