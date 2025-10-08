import React from "react";
import OrderHeader from "../Component/OrderHeader";
import Details from "../Component/Details";
import orde from "../Data/adminorder";
function Order() {
  return (

    <div className="shadow-md rounded-md  max-w-[1500px] w-full mx-auto bg-pink-200">

      <OrderHeader />
      <Details orde={orde} />
    </div>
  );
}

export default Order;
