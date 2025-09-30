import React from "react";
import allProducts from "../Data/allproducts";
import { useNavigate } from "react-router-dom";

function Allproducts() {
  const navigate = useNavigate("");
  return (
    <div className="p-6">
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
              <td className="py-3 px-4">Product Name</td>
              <td className="py-3 px-4">Category</td>
              <td className="py-3 px-4">Rating</td>
              <td className="py-3 px-4">Original Price</td>
              <td className="py-3 px-4">Change Price </td>
              <td className="py-3 px-4">Image</td>
              <td className="py-3 px-4">Actions</td>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((pdata, index) => (
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
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
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
