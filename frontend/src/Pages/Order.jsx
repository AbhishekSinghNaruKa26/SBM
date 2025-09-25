import React from "react";
import orderimg from "../../public/IMAGES/spices maslaa/kasmirilalmirch.jpeg";
import { AiOutlineLike } from "react-icons/ai";
import exclusiveProducts from "../Data/Exclusive.collection";

function Order() {
  return (
    <div className="w-full mx-auto my-20 px-4 flex flex-col items-center space-y-5 sm:space-y-10">
      {/* 1. orders details and pack */}

      <div className="flex items-center gap-4 w-full mx-auto">
        <div className="max-w-[70px] min-w-[70px] border-[5px] border-gray-100 rounded-xl px-2 py-2 ">
          <img src={orderimg} className="object-cover" />
        </div>
        <div className="truncate">
          <span className="text-[14px] md:text-[20px] text-gray-800">
            STAYFREE Dry-Max All Nights| All round protection through the night|
            2x better coverage Sanitary Pad
          </span>
          <p className="text-[12px] md:text-[18px] text-gray-500">Pack of 42</p>
        </div>
      </div>
      {/* 2. Pay button and exprinces */}
      <div className="w-full mx-auto ">
        <div className="bg-gray-100 rounded-md shadow-md flex justify-between items-center py-4 px-4">
          <span className="text-[13px] sm:text-[15px]">
            Pay online for a smooth doorstep experience
          </span>
          <div className="bg-white border border-red-400 rounded-md flex items-center">
            <butto className="text-[12px] sm:text-[15px] whitespace-nowrap px-8 py-2 text-red-500 font-semibold">
              Pay ₹599
            </butto>
          </div>
        </div>
      </div>
      {/* 3. order Confirmed */}
      <div className="w-full mx-auto border border-red-400 rounded-md">
        <div className="px-4 py-4 flex flex-col space-y-4 sm:space-y-7">
          {/* i. order confird div part */}

          <div className="flex flex-col gap-1 sm:gap-2">
            <span className="text-[18px] sm:text-[25px] font-semibold">
              Order Confirmed
            </span>
            <span className="text-[13px] sm:text-[18px] text-gray-500 font-semibold">
              Your Order has been placed.
            </span>
          </div>

          {/* ii. share Location and help delevery */}

          <div className="bg-gray-100 rounded-md shadow-md flex justify-between items-center py-4 px-4">
            <span className="text-[11px] sm:text-[15px]">
              Help our delivery agent reach you faster.
            </span>
            <div className="bg-white border border-red-400 rounded-md flex items-center">
              <button className="text-[12px] sm:text-[15px] whitespace-nowrap px-3 py-1 sm:px-8 sm:py-2 text-red-500 font-semibold">
                Share Location{" "}
              </button>
            </div>
          </div>

          {/* iii. Order Confirmed process day */}

          <div className="flex items-center gap-2">
            <butto className="border-[1px] border-gray-700 rounded-[50%] h-[4px] px-2 py-2 bg-green-600"></butto>
            <div className="w-[50%] h-[4px] bg-green-600 rounded-md"></div>
            <butto className="border-[1px] border-gray-300 rounded-[50%] h-[4px] px-2 py-2 bg-gray-200"></butto>
            <div className="w-[50%] h-[4px] bg-gray-300 rounded-md"></div>
            <butto className="border-[1px] border-gray-300 rounded-[50%] h-[4px] px-2 py-2 bg-gray-200"></butto>
          </div>

          {/* iv. order dated */}

          <div className="flex justify-between items-center mt-[-15px]">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-[15px] text-gray-500">
                Order Confirmed
              </span>
              <span className="text-[10px] sm:text-[15px] text-gray-500">
                Sep 22
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] sm:text-[15px] text-gray-500">
                Shipped
              </span>
              <span className="text-[10px] sm:text-[15px] text-gray-500">
                Sep 30
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] sm:text-[15px] text-gray-500">
                Delivery
              </span>
              <span className="text-[10px] sm:text-[15px] text-gray-500">
                Oct 11 by 11 PM
              </span>
            </div>
          </div>

          {/* v. se all update button and border niche */}

          <div className="w-full text-center flex flex-col gap-4">
            <div className="border-b border-gray-200"></div>
            <button className="text-[15px] sm:text-[20px] text-red-500 font-semibold">
              See all update
            </button>
          </div>
        </div>
      </div>

      {/* 4. You might be also intrested in */}
      <div className="w-full flex flex-col  rounded-md">
        <h1 className="text-[20px] sm:text-[28px] text-gray-800 font-semibold pb-4">
          You might be also interested in
        </h1>
        <div className="flex gap-2 md:gap-6 overflow-x-auto w-full mx-auto ">
          {exclusiveProducts.map((product, index) => (
            <div
              key={index}
              className="px-3 border border-gray-400 pb-2 min-w-35 max-w-48 whitespace-nowrap truncate rounded-lg sm:mx-3 "
            >
              <div className="flex justify-center my-2">
                <img className="h-20 w-15" src={product.img} alt="" />
              </div>

              <div className="font-bold my-1 text-red-600">
                <h1>{product.companyName}</h1>
              </div>

              <div className="font-semibold my-1 text-sm truncate">
                {product.productName}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deleviry details */}

      {/*6. price Details*/}

      <div className="w-full mx-auto flex flex-col">
        <h1 className="text-[20px] sm:text-[28px] text-gray-800 font-semibold pb-4">
          Price Details
        </h1>
        <div className="">
          <div className="flex flex-col space-y-2 p-4 bg-gray-100 rounded-md">
            <div className="space-y-3 text-center">
              <button className="bg-orange-100 rounded-3xl px-8 md:px-20 py-1 border border-orange-300">
                Use this payment method
              </button>
            </div>
            <div className="border-b border-gray-200"></div>
            <div className="flex justify-between items-center font-semibold">
              <p className="font-semibold">Items:</p>
              <p>₹4,999.00</p>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <p className="font-semibold">Delivery:</p>
              <p>₹40.00</p>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <p className="font-semibold text-blue-600">Marketplace Fee</p>
              <p>₹5.00</p>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <p className="font-semibold">Total:</p>
              <p>₹5,044.0</p>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <p className="font-semibold text-green-600">FREE Delivery</p>
              <p>-₹40.00</p>
            </div>
            <div className="flex justify-between items-center font-semibold">
              <p className="font-semibold text-[20px]  sm:text-[25px]">
                Order Total
              </p>
              <p className="font-semibold text-[20px]  sm:text-[25px]">
                ₹5,004.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
