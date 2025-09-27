import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Details({ orde }) {
  const [action, setAction] = useState(null);

  const handleToggle = (index) => {
    setAction(action === index ? null : index);
  };

  return (
    <div className="max-w-[1800px] px-2 sm:px-4 w-full mx-auto mt-4 flex flex-col gap-4 overflow-x-auto">
      {/* Header */}
      <div className="min-w-[700px] text-white font-semibold text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] w-full px-3 sm:px-10 py-3 sm:py-4 bg-red-500 rounded-md shadow-md flex justify-between items-center">
        <div className="flex gap-6 sm:gap-20 items-center">
          <span>ID</span>
          <span>Name</span>
        </div>
        <div className="w-[150px] sm:w-[500px] truncate">
          <span>Address</span>
        </div>
        <div className="flex gap-4 sm:gap-20 items-center">
          <span>Date</span>
          <span>Price</span>
          <span>Status</span>
          <span>Action</span>
        </div>
      </div>

      {/* Rows */}
      {orde.map((item, i) => (
        <div
          key={i}
          className="min-w-[700px] w-full border-[2px] border-gray-400 rounded-md hover:shadow-md"
        >
          {/* Row Content */}
          <div className="text-black hover:text-white font-semibold text-[11px] sm:text-[14px] md:text-[15px] px-3 sm:px-9 py-3 sm:py-4 hover:bg-red-300 flex justify-between items-center">
            <div className="flex gap-6 sm:gap-20 items-center">
              <span>{item.id}</span>
              <span>{item.name}</span>
            </div>
            <div className="w-[150px] sm:w-[500px] truncate">
              <span>{item.address}</span>
            </div>
            <div className="flex gap-4 sm:gap-20 items-center">
              <span>{item.d}</span>
              <span>{item.price}</span>
              <span>{item.status}</span>

              {/* Action toggle */}
              <span
                onClick={() => handleToggle(i)}
                className="flex items-center cursor-pointer"
              >
                Action
                {action === i ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
            </div>
          </div>

          {/* Extra div for Accept/Reject (will not disturb layout) */}
          {action === i && (
            <div className="px-3 sm:px-9 py-3 flex gap-3 justify-end bg-gray-100 border-t">
              <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
                Accept
              </button>
              <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
                Reject
              </button>
              <button
                onClick={() => setAction(null)}
                className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 text-sm"
              >
                Close
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Details;
