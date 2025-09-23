import React from "react";
import Addressform from "../Components/Addressform";
import Payemnt from "../Components/Payemnt";
import Revieworder from "../Components/Revieworder";
import Help from "../Components/Help";
import Totalpay from "../Components/Totalpay";
import Paynavbar from "../Components/Paynavbar";
import Payfooter from "../Components/Payfooter";

function Addresspayment() {
  return (
    <div className="">
      <Paynavbar />
      <div className="flex md:flex-row p-4 flex-col w-full">
        <div className="flex flex-col md:max-w-[70%] w-full">
          <Addressform />
          <Payemnt />
          <Revieworder />
          <Help />
        </div>
        <div className="md:max-w-[35%] w-full mx-auto">
          <Totalpay />
        </div>
      </div>
      <Payfooter />
    </div>
  );
}

export default Addresspayment;
