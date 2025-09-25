import React from "react";
import { useNavigate } from "react-router-dom";
import { LuMoveLeft } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Orders = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {/* My Orders AND Navigate Button */}
        <div className="bg-red-500 fixed  top-0 w-full">
          <div className="flex items-center gap-4 p-3 ">
            <LuMoveLeft
              onClick={() => navigate("/Account")}
              className="text-white font-bold text-xl"
            />
            <Link to="/orders">
              {" "}
              <div className="text-lg text-white font-semibold">My Orders</div>
            </Link>
          </div>
        </div>

        <div className="h-3 bg-gray-300 fixed top-12 w-full"></div>

        {/* Search your Order  here */}
        <div className="p-2  fixed bg-white top-14 w-full ">
          <div className="flex items-center border gap-2 py-2 border-gray-300">
            <div className="pl-2">
              <IoSearchOutline />
            </div>
            <input
              className="outline-none w-full"
              type="text"
              placeholder="Search Your Order Here"
            />
          </div>
        </div>

        {/* Order product List */}
        <div className="mt-27  space-y-6 ">
          {/* Products */}
          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 2</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>

          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 12</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>

          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4 ">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 12</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>

          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 12</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>

          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 12</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>

          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 12</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>

          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 12</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>

          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 12</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>

          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 12</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>

          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 12</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>

          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 12</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>

          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 12</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>

          <div className="flex gap-2  items-center justify-between border-b border-gray-500 p-4">
            <div className="w-[80px]">
              <img className="w-[61px] h-[72px]" src="haldi.jpeg" alt="" />
            </div>

            <div className="w-full">
              <h1 className="font-semibold"> Delivery expected by Oct 12</h1>
              <h2 className="text-[13px] text-gray-600">
                Shree Baalji Masala Haldi adds rich color, taste, and health
                benefits with purity you can trust.
              </h2>
            </div>

            <div className="">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
