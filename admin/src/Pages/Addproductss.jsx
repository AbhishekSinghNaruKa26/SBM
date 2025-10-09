import React from "react";
import { useState } from "react";
import axios from "axios";




const categories = ["Pure Spices", "Blend Spices", "Whole Spices", "paste"];
function Addproductss() {

  const [name, setNmae] = useState();
  const [company, setCompany] = useState();
  const [rating, setRating] = useState();
  const [price, setPrice] = useState();
  const [orignal, setOriginal] = useState();
  const [category, setCategory] = useState(categories[0]);
  const [img, setImg] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 👇 first check if all fields filled
    if (
      !name ||
      !company ||
      !rating ||
      !price ||
      !orignal ||
      !category ||
      !img
    ) {
      alert("All fields are required!");
      return; // stop form submission
    }

    // form submit
    await axios.post("http://localhost:8080/sbm/addproducts", {
      name,
      company,
      rating,
      price,
      orignal,
      category,
      img,
    });

    alert("Product added successfully!");

    // reset form
    setNmae("");
    setCompany("");
    setRating("");
    setPrice("");
    setOriginal("");
    setCategory(categories[0]);
    setImg("");
  };
  return (
    <div className="max-w-[1250px] w-full mx-auto">
      <form
        className="bg-white p-4 shadow-md rounded-md mt-4 border-[2px] border-red-500"
        onSubmit={handleSubmit}
      >

        <h2 className="text-center text-[20px] font-semibold mb-2 text-red-500">
          Add Products
        </h2>
        <input
          name="name"
          placeholder="Company Name !"
          className="border px-3 py-2 rounded-lg w-full mb-4"

          onChange={(e) => setCompany(e.target.value)}

        />
        <input
          name="name"
          placeholder="Product Name !"
          className="border px-3 py-2 rounded-lg w-full mb-4"


          onChange={(e) => setNmae(e.target.value)}

        />
        <select
          type="text"
          placeholder="Selecte Category!"
         className="border px-3 py-2 rounded-lg w-full  mb-4"
        >
   

          <option value="">Select Category</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}

        </select>
        
        <input
          type="text"
          placeholder="Rating!"
          className="border px-3 py-2 rounded-lg w-full mb-4"


          onChange={(e) => setRating(e.target.value)}

        />
        <input
          type="text"
          placeholder="Original Price"
          className="border px-3 py-2 rounded-lg w-full mb-4"

          onChange={(e) => setOriginal(e.target.value)}

        />
        <input
          type="text"
          placeholder="Changes Price !"
          className="border px-3 py-2 rounded-lg w-full mb-4"


          onChange={(e) => setPrice(e.target.value)}

        />
        <input
          type="text"
          placeholder="Image Url"
          className="border px-3 py-2 rounded-lg w-full mb-4"

          onChange={(e) => setImg(e.target.value)}

        />
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Addproductss;
