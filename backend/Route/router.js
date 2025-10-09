import express from "express";
import {
  addproducts,
  deleteproduct,
  getallproducts,
} from "../Controllers/productsCont.js";
import { addToCart, deleteCart, getCart } from "../Controllers/cartCont.js";
const router = express.Router();
router.post("/addproducts", addproducts);
router.get("/allproducts", getallproducts);
router.delete("/deleteproducts/:id", deleteproduct);

router.post("/addtocart", addToCart);
router.get("/getcart/:user", getCart);
router.delete("/removecart", deleteCart);
export default router;
