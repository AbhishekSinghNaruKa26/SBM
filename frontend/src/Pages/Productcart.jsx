import React from "react";
import Cartdetails from "../Components/Cartdetails";
import Description from "../Components/Description";
import cart from "../Data/cart";
import desc from "../Data/description";

function Productcart() {
  return (
    <div>
      <Cartdetails cart={cart} />
      <Description desc={desc} />
    </div>
  );
}

export default Productcart;
