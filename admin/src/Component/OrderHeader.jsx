import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar2Date } from "react-icons/bs";

function OrderHeader() {
  // Default today date
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [active, setActive] = useState(false);
  return (
    <div className="max-w-[1500px] w-full mx-auto px-2 sm:px-5 py-4 flex flex-col gap-5">
      {/* Header */}
      <div className="w-full mx-auto flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[22px] sm:text-[28px] text-red-500 font-bold">
            Order
          </span>
          <span className="text-[16px] sm:text-[20px] text-red-400 font-bold">
            28 Orders Found
          </span>
        </div>
        {/* Agar active false hai toh ye icons dikhayenge */}
        <div>
          {!active && (
            <div className="text-[22px] sm:text-[28px] font-bold flex items-center gap-4 text-red-500">
              <IoIosSearch
                onClick={() => setActive(true)}
                className="cursor-pointer"
              />
              <IoMdNotificationsOutline />
              <FaRegUser />
            </div>
          )}
          {active && (
            <form className="w-full sm:w-[400px] rounded-md bg-red-100 shadow-md flex items-center gap-2 px-2 py-2">
              <IoIosSearch className="text-[18px]" />
              <input
                type="text"
                placeholder="Search User"
                className="outline-none text-[16px] sm:text-[18px] w-full bg-transparent"
              />
              {/* Close button for back to icons */}
              <span
                onClick={() => setActive(false)}
                className="cursor-pointer text-red-500 font-bold text-[20px]"
              >
                X
              </span>
            </form>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full mx-auto flex flex-col md:flex-row md:justify-between   md:items-center gap-5">
        {/* Tabs */}
        <div className="flex gap-3 sm:gap-5">
          <span className="text-[14px] md:text-[20px] text-gray-400 font-bold hover:text-black hover:border-b-[4px] border-red-500 cursor-pointer whitespace-nowrap">
            All Orders
          </span>
          <span className="text-[14px] md:text-[20px] text-gray-400 font-bold hover:text-black hover:border-b-[4px] border-red-500 cursor-pointer tracking-wider">
            Dispatch
          </span>
          <span className="text-[14px] md:text-[20px] text-gray-400 font-bold hover:text-black hover:border-b-[4px] border-red-500 cursor-pointer tracking-wider">
            Pending
          </span>
          <span className="text-[14px] md:text-[20px] text-gray-400 font-bold hover:text-black hover:border-b-[4px] border-red-500 cursor-pointer tracking-wider">
            Completed
          </span>
        </div>

        {/* Date Pickers */}
        <div className="flex items-center gap-5">
          {/* From Date */}
          <div className="flex items-center gap-2 sm:gap-3 bg-gray-200 px-2 py-2 rounded-md w-[130px]">
            <BsCalendar2Date className="text-[20px] sm:text-[28px]" />
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="From"
              className="w-full focus:outline-none bg-transparent text-[15px]"
            />
          </div>

          <span className="text-[16px] sm:text-[20px]">To</span>

          {/* To Date */}
          <div className="flex items-center gap-2 sm:gap-3 bg-gray-200 px-2 py-2 rounded-md  w-[130px]">
            <BsCalendar2Date className="text-[20px] sm:text-[28px]" />
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="To"
              className="w-full focus:outline-none bg-transparent text-[15px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHeader;
