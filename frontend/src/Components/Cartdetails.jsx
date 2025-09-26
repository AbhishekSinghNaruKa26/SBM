import React, { useState } from "react";
import carts from "../../public/IMAGES/BlendMasla/cartimg.webp";
import { IoEyeSharp } from "react-icons/io5";
import { IoRadioButtonOn } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { GrCompare } from "react-icons/gr";
import { LuBus } from "react-icons/lu";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiShare2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
function Cartdetails({ cart }) {
  const [count, setCount] = useState(1);
  const [active, setActive] = useState(false);
  const [isactive, setIsactive] = useState(false);
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row  mx-auto mb-10 md:mb-35  mt-25">
      {/* image protion */}
      <div className="md:ml-10 w-full md:w-[40%]   md:h-full object-cover overflow-hidden md:sticky top-0 border border-gray-200 flex items-center">
        <img
          src={carts}
          className="w-full h-auto object-cover min-h-[200px] "
        />
      </div>
      {/* Data portion */}
      <div className=" w-full md:w-[58%] md:overflow-y-scroll transition-transform duration-1000 flex flex-col  space-y-2 md:space-y-5 mt-5 md:mt-0 px-6 md:px-15">
        {/* rating */}
        {/* name masala */}

        <div className="text-black font-bold text-base md:text-[40px]">
          SBM Kashmiri-Chili
        </div>

        {/* discount and orignal price */}
        <div className="space-x-2">
          <span className="line-through  text-gray-400 text-base md:text-[25px] tracking-wider">
            ₹599
          </span>
          <span className="md:text-[25px] font-bold text-red-700 tracking-wider">
            ₹299
          </span>
        </div>
        <div className="text-base md:text-[25px] text-gray-300 font-semibold tracking-widest">
          ★★★★★
        </div>
        {/* disciption about product details */}
        <div className="text-gray-500 md:text-[25px]">
          Experience the authentic taste of Indian street food with Everest Pani
          Puri Masala. Made with a perfect blend of spices, this masala will
          elevate your Pani Puri to a whole new level. Enjoy the unique...
        </div>
        <div className="border-t border-gray-300"></div>
        {/* how many pepole view this product and its details */}
        <div className="flex space-x-2 items-center">
          <IoEyeSharp className="text-[20px]" />
          <span className="text-base md:text-[20px] text-gray-600 font-semibold tracking-wider whitespace-nowrap">
            22 people are viewing this right now
          </span>
        </div>
        {/* Availability and out of stock */}
        <div className="flex space-x-2">
          <span className="text-base md:text-[22px] text-black tracking-wider font-semibold">
            Availability :
          </span>
          <div className="flex space-x-1.5 items-center justify-center">
            <IoRadioButtonOn className="text-base md:text-[22px] text-gray-400 tracking-wider font-semibold" />
            <span className="text-base md:text-[22px] text-gray-400 tracking-wider font-semibold">
              Out of stock
            </span>
          </div>
        </div>
        {/* name of product and quanitiy */}
        <div className="text-base md:text-[22px] text-black tracking-wider font-semibold w-full mx-aut">
          SBM Kashmiri-Chili
        </div>
        <span className="text-base md:text-[22px] font-bold">Pack sizes</span>
        {cart.map((item, index) => (
          <div
            key={index}
            className="w-full min-h-[50px] md:min-h-[80px] border border-gray-200 px-3 sm:px-5  md:px-10 flex sm:flex-row  items-center justify-between gap-2 sm:gap-1 hover:shadow-md hover:border hover:border-green-200"
          >
            <span className="text-[10px] md:text-[20px] font-semibold tracking-wider">
              {item.g}
              <p className="flex flex-col text-[10px] md:text-[18px] text-gray-500  tracking-wider md:pt-1">
                {item.cartoon}
              </p>
            </span>
            <span className="text-[10px] md:text-[20px] font-semibold tracking-wider mb-5">
              {item.price}
            </span>
            <span className="sm:text-[10px] md:text-[20px] font-semibold tracking-wider  bg-orange-100 rounded-2xl md:px-3  px-1 md:mb-5 mb-2 ">
              {item.mins}
            </span>
          </div>
        ))}
        <div className="text-base md:text-[16px] text-black tracking-wider font-semibold mt-2 md:mt-4">
          Quantity
        </div>

        {/* quantity and buy it now button and sign out button */}
        <div className="flex items-center space-x-5 md:mt-[-8px]">
          <div className="w-[120px] md:w-[170px] h-[50px] md:h-[60px] border-2 md:border-[3px] border-gray-400 rounded-md flex justify-center items-center space-x-4.5 md:space-x-10 ">
            <button
              className="text-base md:text-[22px] tracking-widest text-gray-600 font-semibold"
              onClick={() => setCount(count > 1 ? count - 1 : 1)}
            >
              -
            </button>
            <button className=" text-base md:text-[22px] tracking-widest text-gray-600 font-semibold">
              {count}
            </button>
            <button
              className=" text-base md:text-[22px] tracking-widest text-gray-600 font-semibold"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
          <Link to={"/products/cart/address"}>
            <div className="w-full  px-9 whitespace-nowrap h-[50px] md:h-[60px] text-base md:text-[20px] text-white font-semibold bg-black flex items-center justify-center rounded-md tracking-wider hover:bg-red-700 transition duration-500">
              BUY IT NOW
            </div>
          </Link>
        </div>

        {/* Wishlist and Compare products */}
        <div className="flex space-x-5">
          <span className="text-base md:text-[22px] text-black tracking-wider font-semibold  flex items-center gap-1.5">
            <IoHeartOutline className="text-base md:text-[22px] text-black tracking-wider" />
            Wishlist
          </span>
          <span className="text-base md:text-[22px] text-black tracking-wider font-semibold  flex items-center gap-1.5">
            <GrCompare className="text-base md:text-[22px] text-black tracking-wider" />
            Compare
          </span>
        </div>

        <div className="space-y-2">
          <span className="flex space-x-3">
            <p className="text-base md:text-[20px] text-black tracking-wider font-bold">
              Vendor:
            </p>
            <p className="text-base md:text-[20px] text-black tracking-wider  hover:text-red-500">
              SBmasala
            </p>
          </span>
          <span className="flex space-x-3">
            <p className="text-base md:text-[20px] text-black tracking-wider font-bold">
              Category:
            </p>
            <p className="text-base md:text-[20px] text-black tracking-wider hover:text-red-500">
              Spice
            </p>
          </span>
          <span className="flex space-x-3">
            <p className="text-base md:text-[20px] text-black tracking-wider font-bold">
              Tags:
            </p>
            <p className="text-base md:text-[20px] text-black tracking-wider hover:text-red-500">
              SBM Masala Kashmiri-Chili
            </p>
          </span>
        </div>

        <div
          className="w-full h-[50px] md:h-[60px] p-5 bg-gray-300 text-base md:text-[20px] text-black flex items-center justify-between tracking-wider gap-2 font-semibold"
          onClick={() => setActive(!active)}
        >
          <h1 className="flex items-center gap-2 text-base md:text-[20px]">
            <LuBus /> Shipping & Returns
          </h1>
          {active ? (
            <IoIosArrowUp className="text-base md:text-[20px]" />
          ) : (
            <IoIosArrowDown className="text-base md:text-[20px]" />
          )}
        </div>
        
        {active && (
          <div className="flex flex-col space-y-2 text-gray-600 ">
            <span className="text-base md:text-[20px]">
              Free shipping and returns available on all orders!
            </span>
            <span className="text-base md:text-[20px]  flex flex-col md:flex-row gap-1 ">
              We ship all US domestic orders within{" "}
              <p className="text-base md:text-[20px] text-gray-600 font-semibold ">
                5-10 business days
              </p>
            </span>
          </div>
        )}
        <div
          className="w-full h-[50px] md:h-[60px] p-5 bg-gray-300 text-base md:text-[22px] text-black flex items-center justify-between tracking-wider gap-2 font-semibold"
          onClick={() => setIsactive(!isactive)}
        >
          <h1 className="flex items-center gap-2 text-base md:text-[20px]">
            {" "}
            <IoHeartOutline />
            Care Instructions
          </h1>
          {isactive ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {isactive && (
          <div className="w-full text-gray-500 ">
            <span className="text-base md:text-[20px]">
              We advise routinely dusting your items with a gentle cleanser to
              preserve its look. Periodically, it may need to be softly wet with
              a mild detergent solution.
            </span>
          </div>
        )}
        <div className="text-base md:text-[20px] flex gap-2 items-center mt-4 md:mt-0">
          <RiShare2Line className="text-base md:text-[22px]" />
          <h1 className="text-base md:text-[18px] font-bold">SHARE</h1>
        </div>
      </div>
    </div>
  );
}

export default Cartdetails;
