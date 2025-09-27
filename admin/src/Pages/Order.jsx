import React from "react";
import OrderHeader from "../Component/OrderHeader";
import Details from "../Component/Details";
import orde from "../Data/adminorder";
function Order() {
  return (
    <div className="h-screen overflow-y-auto">
      <OrderHeader />
      <Details orde={orde} />
    </div>
  );
}

export default Order;
