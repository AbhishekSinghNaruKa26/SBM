import React from "react";

function Description({ desc }) {
  return (
    <div className="mb-10 space-y-5 md:space-y-7 max-w-[1400px] w-full mx-auto p-5 md:p-10">
      <div className="border border-gray-400 md:border-gray-200 w-full"></div>
      <div className="text-[22px] md:text-[22px] tracking-wider font-bold max-w-[300px] w-full">
        Why choose SBM?
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:flex items-center space-y-5 sm:space-y-0 sm:space-x-0 gap-4  max-w-[1300px] w-full mx-auto h-[240px]">
        {desc.map((item) => (
          <div className="w-full min-h-[190px] flex flex-col items-center justify-center p-4 space-y-2 rounded-md shadow-md border border-gray-400 hover:border-green-400 mx-auto max-w-[300px]">
            <div className="h-[40px] w-[40px]">
              <img src={item.src} />
            </div>
            <div className="text-[18px] sm:text-[14px] md:text-[16px] font-bold tracking-wider flex justify-center">
              {item.head}
            </div>
            <div className="text-[14px] sm:text-[11px] md:text-[13px] text-gray-500  tracking-wider">
              {item.contant}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Description;
