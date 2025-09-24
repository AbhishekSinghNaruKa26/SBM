import React from "react";
import { aboutUs } from "../Data/about";
import { allSbm } from "../Data/about";
import { Link } from "react-router-dom";
import { mv } from "../Data/about";

function Aboutus() {
  return (
    <div className="mb-20 mt-30 px-4">
      <div className="w-full mx-auto max-w-[1400px] my-10 md:space-y-40 space-y-10">
        <div className="w-full mx-auto">
          {aboutUs.map((item, i) => (
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
              <div key={i} className="md:max-w-[700px] w-full mx-auto">
                <img src={item.src} className="overflow-hidden object-cover " />
              </div>
              <div className="max-w-[500px] w-full mx-auto space-y-4 flex flex-col">
                <h1 className="text-[32px] sm:text-[40px] font-semibold md:text-start text-center">
                  {item.head}
                </h1>
                <span className="text-[18px] md:text-[22px] tracking-wider whitespace-pre-wrap">
                  {item.contant1}
                </span>
                <span className="text-[18px] md:text-[22px]  tracking-wider whitespace-pre-wrap">
                  {item.contant2}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mx-auto px-2">
          {allSbm.map((item, i) => (
            <div className="w-full mx-auto md:grid md:grid-cols-2  gap-10 flex flex-col-reverse ">
              <div className="max-w-[500px] w-full mx-auto space-y-4 flex flex-col">
                <h1 className="text-[32px] sm:text-[40px] font-semibold md:text-start text-center">
                  {item.head}
                </h1>
                <span className="text-[18px] md:text-[22px] tracking-wider whitespace-pre-wrap">
                  {item.contant1}
                </span>
                <div className="bg-red-500 text-white max-w-[280px] text-center tracking-wider rounded-md hover:bg-red-700 transition duration-500">
                  <Link to={"/products"}>
                    <button className="text-[22px] py-3 font-bold">
                      Explore our Products
                    </button>
                  </Link>
                </div>
              </div>
              <div key={i} className="md:max-w-[700px] w-full mx-auto">
                <img src={item.src} className="overflow-hidden object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10">
        {mv.map((item1, i) => (
          <div className="bg-gray-200 max-w-[800px] mx-auto w-full rounded-md shadow-md px-4 py-4 flex flex-col">
            <div key={i} className="max-w-[200px] w-full px-4 py-4">
              <img src={item1.src} className="object-cover overflow-hidden" />
            </div>
            <div className="w-full mx-auto space-y-4 flex flex-col px-4 py-4">
              <h1 className="text-[28px] font-semibold ">{item1.head}</h1>
              <span className=" text-[18px] text-gray-400 tracking-wider whitespace-pre-wrap">
                {item1.contant}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aboutus;
