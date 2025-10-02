import React from "react";
import OrderHeader from "../Component/OrderHeader";
import Details from "../Component/Details";
import orde from "../Data/adminorder";
function Order() {
  return (
    <div className="shadow-xl rounded-xl mt-5 max-w-[1500px] w-full mx-auto">
      <OrderHeader />
      <Details orde={orde} />
    </div>
  );
}

export default Order;
