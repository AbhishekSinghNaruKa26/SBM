import React from "react";
import Category from "../Components/Category";
import categories from "../Data/category";
import Products from "../Components/Products";
import allproducts from "../Data/product";
import { CategoryProvider } from "../context/Categorycontext";
function Product() {
  return (
    <div>
      <CategoryProvider>
        <Category cat={categories} />
        <Products prodc={allproducts} />
      </CategoryProvider>
    </div>
  );
}

export default Product;
