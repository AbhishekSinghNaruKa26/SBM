import React from "react";
import Category from "../Components/Category";
import categories from "../Data/category";
import Products from "../Components/Products";
import { CategoryProvider } from "../context/Categorycontext";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
function Product() {
  const [products, setProducts] = useState([]);
  const getallproduct = async () => {
    try {
      const res = await axios.get("http://localhost:8080/sbm/allproducts");
      setProducts(res.data.data);
    } catch (err) {
      console.error("error fetching in all products", err);
    }
  };
  useEffect(() => {
    getallproduct();
  }, []);

  return (
    <div>
      <CategoryProvider>
        <Category cat={categories} />
        <Products prodc={products} />
      </CategoryProvider>
    </div>
  );
}

export default Product;
