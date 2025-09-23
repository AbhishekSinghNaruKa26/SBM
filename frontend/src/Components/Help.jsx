import React from "react";

function Help() {
  return (
    <div className="p-4 max-w-[100%]">
      <div className="flex flex-col space-y-2 p-4 shadow-md text-[13px]">
        <p>
          Need help? Check our{" "}
          <button className="text-blue-700 hover:underline">help pages</button>{" "}
          or{" "}
          <button className="text-blue-700 hover:underline">
            contact us 24x7
          </button>
        </p>
        <p>
          When your order is placed, we'll send you an e-mail message
          acknowledging receipt of your order. If you choose to pay using an
          electronic payment method (credit card, debit card or net banking),
          you will be directed to your bank's website to complete your payment.
          Your contract to purchase an item will not be complete until we
          receive your electronic payment and dispatch your item. If you choose
          to pay using Pay on Delivery (POD), you can pay using cash/card/net
          banking when you receive your item.
        </p>
        <p>
          See SDM.in's{" "}
          <button className="text-blue-700 hover:underline">
            Return Policy.
          </button>
        </p>
        <p>
          <button className="text-blue-700 hover:underline">
            Back to cart
          </button>
        </p>
      </div>
    </div>
  );
}

export default Help;
