import React from "react";
import prod from "../../public/IMAGES/spices maslaa/kasmirilalmirch.jpeg";

function Revieworder() {
  return (
    <div className="p-4 max-w-[100%]">
      <div className="flex flex-col space-y-4 px-4 pt-4 shadow-md">
        <div className="flex justify-between items-center">
          <p className="font-bold tracking-wider">Arriving 22 Sept 2025</p>
          <button className="text-blue-600 hover:underline ">
            Review Order
          </button>
        </div>
        <div className="flex gap-5">
          <div className="w-[140px] h-[140px] object-cover overflow-hidden">
            <img src={prod} />
          </div>
          <div className="text-[13px] md:text-[18px] md:font-semibold">
            Noise Airwave Max 5 Wireless Over-Ear Headphones with Adaptive
            Hybrid ANC (up to 50dB), HFA Tech, 80H Playtime, Dual Pairing(Calm
            Beige)
          </div>
        </div>
      </div>
    </div>
  );
}

export default Revieworder;
