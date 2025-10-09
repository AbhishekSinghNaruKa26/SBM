import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";



function Allproducts() {
  const navigate = useNavigate("");
  const [products, setProducts] = useState([]);
  const getallproduct = async () => {
    try {
      const res = await axios.get("http://localhost:8080/sbm/allproducts");
      setProducts(res.data.data);
    } catch (err) {
      console.error("error fetching in all products", err);
    }
  };
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are You Sure to Delete a Product");
    if (!confirm) return;
    try {
      await axios.delete(`http://localhost:8080/sbm/deleteproducts/${id}`);
      alert("Product Deleted");
      getallproduct();
    } catch (err) {
      console.err("error fetching Products", err);
    }
  };
  useEffect(() => {
    getallproduct();
  }, []);

  return (
    <div className="px-4 shadow-xl">
      <div
        className="flex items-end justify-end "
        onClick={() => navigate("/admin/addproducts")}
      >
        <button className="bg-red-400 border-[2px] border-solid px-5 py-2 rounded-md">
          Add Products
        </button>
      </div>
      <h2 className="text-[28px] font-bold my-4 text-center">
        {" "}
        Our Total Products
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-md ">
          <thead>
            <tr className="bg-red-400 text-white text-left text-[14px] md:text-[18px] font-bold">
              <td className="py-3 px-4">#</td>
              <td className="py-3 px-4 whitespace-nowrap">Product Name</td>
              <td className="py-3 px-4 whitespace-nowrap">Category</td>
              <td className="py-3 px-4 whitespace-nowrap">Rating</td>
              <td className="py-3 px-4 whitespace-nowrap">Original Price</td>
              <td className="py-3 px-4 whitespace-nowrap">Change Price </td>
              <td className="py-3 px-4 whitespace-nowrap">Image</td>
              <td className="py-3 px-4 whitespace-nowrap">Actions</td>
            </tr>
          </thead>
          <tbody>

            {products.map((pdata, index) => (
              <tr
                key={pdata._id}

                className="border-t hover:bg-gray-200 hover:shadow-md "
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{pdata.name}</td>
                <td className="py-3 px-4">{pdata.category}</td>
                <td className="py-3 px-4">{pdata.rating}</td>
                <td className="py-3 px-4">{pdata.orignal}</td>
                <td className="py-3 px-4">{pdata.price}</td>
                <td className="py-3 px-4 w-[30px]">
                  <img src={pdata.img} />
                </td>
                <td className="py-3 px-4">

                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(pdata._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Allproducts;
