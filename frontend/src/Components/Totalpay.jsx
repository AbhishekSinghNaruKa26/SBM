import React from "react";

function Totalpay() {
  return (
    <div className="p-4 max-w-[100%]">
      <div className="flex flex-col space-y-2 p-4 shadow-md">
        <div className="space-y-3 text-center">
          <button className="bg-orange-100 rounded-3xl px-10 md:px-20 py-1 border border-orange-300">
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
          <p className="font-semibold text-[25px]">Order Total</p>
          <p className="font-semibold text-[25px]">₹5,004.00</p>
        </div>
      </div>
    </div>
  );
}

export default Totalpay;
