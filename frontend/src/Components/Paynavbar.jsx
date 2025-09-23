import React, { useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Paynavbar() {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full  bg-black shadow h-[70px] px-4 py-2 flex justify-between items-center">
      <div className="text-base md:text-[28px] font-semibold text-white">
        SDM.in
      </div>
      <div
        className="text-base md:text-[28px] font-semibold text-white flex items-center gap-1"
        onClick={() => setActive(!active)}
      >
        Secure chekout
        {active ? (
          <IoIosArrowDown className="text-[20px] mt-2" />
        ) : (
          <IoIosArrowUp className="text-[20px] mt-2" />
        )}
      </div>
      {active && (
        <div className=" shadow-sm bg-white text-[10px] p-2 absolute top-20 z-20 w-[280px] md:left-1/2 border rounded-sm">
          <p>
            We secure your payment and personal information when you share or
            save it with us. We don't share payment details with third-party
            sellers. We don't sell your information to others.
          </p>
          <p className="text-blue-600 hover:underline">Learn more</p>
        </div>
      )}
      <div className="text-[23px] md:text-[30px] font-semibold text-white flex items-center gap-1">
        <BsCartCheckFill />
        <p className="text-base md:text-[18px]  mt-2">cart</p>
      </div>
    </div>
  );
}

export default Paynavbar;
