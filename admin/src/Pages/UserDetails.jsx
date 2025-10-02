import React from "react";
import user from "../Data/user";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
function UserDetails() {
  return (
    <div className="">
      <div className="px-4 max-w-[1800px] w-full">
        {/* Search Box */}
        <form className="w-full sm:w-[400px] rounded-md bg-red-100 shadow-md flex items-center gap-2 px-2 py-2">
          <IoIosSearch className="text-[18px]" />
          <input
            type="text"
            placeholder="Search User"
            className="outline-none text-[16px] sm:text-[18px] w-full bg-transparent"
          />
        </form>
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">👤 Registered Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-red-500 text-left text-white text-[20px] font-bold shadow-md whitespace-nowrap">
                <td className="px-4 py-4">#</td>
                <td className="px-4 py-4 w-[40px]">Image</td>
                <td className="px-4 py-4 ">Name</td>
                <td className="px-4 py-4 ">Email</td>
                <td className="px-4 py-4 ">Phone</td>
                <td className="px-4 py-4 ">Action</td>
              </tr>
            </thead>
            <tbody>
              {user.map((data, index) => (
                <tr
                  key={index}
                  className="border-b-[2px] border-blue-500 text-[18px]"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 w-[40px]">
                    <img
                      src={data.img}
                      className="rounded-[50%] object-cover overflow-hidden"
                    />
                  </td>
                  <td className="px-4 py-3 ">{data.name}</td>
                  <td className="px-4 py-3 ">{data.email}</td>
                  <td className="px-4 py-3 ">{data.phone}</td>
                  <td className="py-3 px-4">
                    <button className="px-3 py-1 rounded flex gap-2">
                      <RiDeleteBinLine className="text-red-500 font-extrabold" />{" "}
                      <BiSolidEditAlt className="text-blue-500 font-extrabold" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
