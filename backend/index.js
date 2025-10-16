import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet'
import ConnectDB from './Config/ConnectDB.js';
import router from './Router/router.js';




const app = express();
const allowedOrigins = [
  process.env.FRONTEND_URL_PROD,
  process.env.FRONTEND_URL_LOCAL
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (mobile apps, curl, Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan());
app.use(cookieParser());
app.use(helmet({
    crossOriginResourcePolicy:false,
}));


app.use((req, res, next) => {
  console.log("👉 Incoming request:", req.method, req.url);
  next();
});


const PORT = process.env.PORT || 8080;




app.get('/',(req ,res)=>{
    res.json({
        message:"Server Is Running On The PORT"+PORT
    })
})

app.use('/sbm',router)

ConnectDB().then(()=>{
    app.listen(PORT , ()=>{
    console.log("Sever Is Running On The PORT :",PORT);
    
});
})