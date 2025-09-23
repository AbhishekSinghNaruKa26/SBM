import React, { useEffect, useState } from "react";

function Payemnt() {
  const [mode, setMode] = useState("default");
  const [selected, setSelected] = useState("card");
  const paymentMethod = [
    { id: "card", name: "Credit/Debit Card" },
    { id: "netbanking", name: "Net Banking" },
    { id: "upi", name: "UPI" },
    { id: "cod", name: "Cash on Delivery" },
  ];

  return (
    <div className="p-4 max-w-[100%]">
      {mode === "default" ? (
        <div
          className="flex justify-between items-center p-4  shadow-md"
          onClick={() => setMode("change")}
        >
          <p className="font-semibold tracking-wider">
            Pay By :{paymentMethod.find((p) => p.id === selected)?.name}
          </p>
          <button className="text-blue-600 hover:underline ">Change</button>
        </div>
      ) : (
        <div className="">
          <h2 className="font-bold mb-3">Select Payment Method</h2>
          <div className="space-y-3">
            {paymentMethod.map((method, index) => (
              <label
                key={method.id || index}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="payment"
                  checked={selected === method.id}
                  onChange={() => setSelected(method.id)}
                />
                {method.name}
              </label>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            {selected === "card" && (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Card Holder Number"
                  className="w-full border p-2 rounded"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Expiry MM/YY"
                    className="w-1/2 border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 border p-2 rounded"
                  />
                </div>
              </div>
            )}
            {selected === "net banking" && (
              <select className="w-full border p-2 rounded">
                <option>Select Bank</option>
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
                <option>Axis Bank</option>
              </select>
            )}
            {selected === "upi" && (
              <input
                type="text"
                placeholder="Enter UPI ID (e.g. name@upi)"
                className="w-full border p-2 rounded"
              />
            )}
            {selected === "cod" && (
              <p className="text-green-600 font-medium">
                Cash on Delivery available
              </p>
            )}
            <button
              onClick={() => setMode("default")}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Payment Method
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payemnt;
