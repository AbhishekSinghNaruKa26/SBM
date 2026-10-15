import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Details({ orde }) {
  const [action, setAction] = useState(null);

  const handleToggle = (index) => {
    setAction(action === index ? null : index);
  };

  return (

    <div className="max-w-[1500px] px-2 sm:px-4 w-full mx-auto mt-6 overflow-x-auto">

      <table className="min-w-[800px] w-full border-collapse">
        <thead>
          <tr className="text-white font-semibold text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] bg-red-500 rounded-md shadow-md">
            <th className="px-3 sm:px-10 py-3 sm:py-4 text-left">ID</th>
            <th className="px-3 sm:px-10 py-3 sm:py-4 text-left">Name</th>
            <th className="px-3 sm:px-10 py-3 sm:py-4 text-left w-[150px] md:w-[500px]">
              Address
            </th>
            <th className="px-3 sm:px-10 py-3 sm:py-4 text-left">Date</th>
            <th className="px-3 sm:px-10 py-3 sm:py-4 text-left">Price</th>
            <th className="px-3 sm:px-10 py-3 sm:py-4 text-left">Status</th>
            <th className="px-3 sm:px-10 py-3 sm:py-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {orde.map((item, i) => (
            <React.Fragment key={i}>
              <tr className="border-b-[2px] border-blue-500 rounded-md hover:shadow-md text-black font-semibold text-[11px] sm:text-[14px] md:text-[15px] whitespace-nowrap">
                <td className="px-3 sm:px-9 py-3 sm:py-4">{i + 1}</td>
                <td className="px-3 sm:px-9 py-3 sm:py-4">{item.name}</td>
                <td className="px-3 sm:px-9 py-3 sm:py-4 truncate w-[150px] md:w-[500px]">
                  {item.address}
                </td>
                <td className="px-3 sm:px-9 py-3 sm:py-4">{item.d}</td>
                <td className="px-3 sm:px-9 py-3 sm:py-4">{item.price}</td>
                <td className="px-3 sm:px-9 py-3 sm:py-4">{item.status}</td>
                <td
                  onClick={() => handleToggle(i)}
                  className="px-3 sm:px-9 py-3 sm:py-4 cursor-pointer flex items-center gap-1"
                >
                  Action {action === i ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </td>
              </tr>
              {action === i && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-3 sm:px-9 py-3 bg-gray-100 border-t"
                  >
                    <div className="flex gap-3 justify-end">
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
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Details;
