import { Router} from 'express';
import verifyFirebaseToken from '../middleware/authMiddleware.js';
import { saveFirebaseUserController, sendEmailOtpController, verifyOtpController } from '../Controllers/userController.js';
import {
  addproducts,
  deleteproduct,
  getallproducts,
} from "../Controllers/productsCont.js";
import { addToCart, deleteCart, getCart } from "../Controllers/cartCont.js";


const router = Router();

router.post('/firebaseSave',verifyFirebaseToken,saveFirebaseUserController);
router.post('/sendotp',sendEmailOtpController);
router.post('/verifyotp',verifyOtpController);

router.post("/addproducts", addproducts);
router.get("/allproducts", getallproducts);
router.delete("/deleteproducts/:id", deleteproduct);

router.post("/addtocart", addToCart);
router.get("/getcart/:user", getCart);
router.delete("/removecart", deleteCart);



export default router;