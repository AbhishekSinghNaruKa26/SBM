import React from "react";

function Payfooter() {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-700 p-4 flex items-center justify-center shadow-lg hover:bg-gray-600">
        <p className="text-[14px] font-semibold text-white tracking-wider">
          Back to top
        </p>
      </div>
      <div className="bg-gray-800 p-5 sm:p-8 flex items-center justify-center">
        <div className="w-[200px] flex justify-between items-center">
          <p className="text-[16px] sm:text-[20px] font-semibold text-white tracking-wider">
            SBmasala
          </p>
          <p className="text-[14px] font-semibold text-white tracking-wider hover:underline">
            Help
          </p>
        </div>
      </div>
      <div className="bg-black text-white flex flex-col items-center justify-center p-4 sm:p-7 space-y-2 ">
        <div className="text-[11px] sm:text-[14px]  flex items-center justify-center space-x-2">
          <p className="hover:underline">Conditions of Use & Sale</p>
          <p className="hover:underline">Privacy Notice</p>
          <p className="hover:underline">Interest-Based Ads</p>
        </div>
        <div className="text-[11px] sm:text-[14px]  flex items-center justify-center space-x-2">
          <p>© 1996-2025</p>
          <p>SBM.com</p>
          <p> Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
}

export default Payfooter;
