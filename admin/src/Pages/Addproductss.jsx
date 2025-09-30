import React from "react";

function Addproductss() {
  return (
    <form className="bg-white p-4 shadow-md rounded-md mt-4 border-[2px] border-red-500">
      <h2 className="text-center text-[20px] font-semibold mb-2 text-red-500">
        Add Products
      </h2>
      <input
        name="name"
        placeholder="Company Name !"
        className="border px-3 py-2 rounded-lg w-full mb-4"
      />
      <input
        name="name"
        placeholder="Product Name !"
        className="border px-3 py-2 rounded-lg w-full mb-4"
      />
      <select
        type="text"
        placeholder="Selecte Category!"
        className="border px-3 py-2 rounded-lg w-full mb-4"
      >
        <option value="">Select Category</option>
      </select>
      <input
        type="text"
        placeholder="Rating!"
        className="border px-3 py-2 rounded-lg w-full mb-4"
      />
      <input
        type="text"
        placeholder="Original Price"
        className="border px-3 py-2 rounded-lg w-full mb-4"
      />
      <input
        type="text"
        placeholder="Changes Price !"
        className="border px-3 py-2 rounded-lg w-full mb-4"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="border px-3 py-2 rounded-lg w-full mb-4"
      />
      <button
        type="submit"
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Add Product
      </button>
    </form>
  );
}

export default Addproductss;
