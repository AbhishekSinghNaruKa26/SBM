import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
function Contactus() {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("How can we help you?");

  const options = [
    "I need help with my Zomato online order.",
    "I found incorrect/outdated information on a page.",
    "There is a photo/review that is bothering me and I would like to report it.",
    "The website/app are not working the way they should.",
    "I would like to give feedback/suggestions.",
    "Other",
  ];
  return (
    <div className="my-20 sm:my-35 grid grid-cols-1 md:grid-cols-2 space-y-2 sm:flex sm:flex-row-reverse  max-w-[1500px] w-full mx-auto sm:gap-15 px-4">
      {/* report and safey content */}
      <div className=" space-y-1 md:space-y-10 md:max-w-[400px] w-full mx-auto">
        <div className="space-y-4 md:shadow-xl w-full py-4 px-2  sm:py-8 sm:px-4 rounded-md ">
          <h1 className="font-semibold text-[20px] sm:text-[24px]">
            Report a Safety Emergency
          </h1>
          <div className="text-[18px] sm:text-[20px] text-gray-600">
            We are committed to the safety of everyone using Zomato.
          </div>
          <button className="text-[22px] text-red-500">Report here</button>
        </div>
        <div className="space-y-4 md:shadow-xl w-full py-4 px-2  sm:py-8 sm:px-4 rounded-md mx-auto">
          <h1 className="font-semibold text-[20px] sm:text-[24px]">
            Issue with your live order?
          </h1>
          <div className="text-[18px] sm:text-[20px] text-gray-600">
            Click on the 'Support' or 'Online ordering help' section in your app
            to connect to our customer support team.
          </div>
        </div>
      </div>
      
      <div className="max-w-[1100px] w-full mx-auto space-y-10 mt-4 sm:mt-0">
        <div
          className="w-full border border-gray-400 rounded-md py-3 px-4 tracking-wider flex justify-between items-center"
          onClick={() => setActive(!active)}
        >
          <span className="text-[17px] sm:text-[20px] text-gray-400 whitespace-nowrap ">
            {selected}
          </span>{" "}
          {active ? (
            <IoMdArrowDropup className="text-[20px] sm:text-[23px] text-gray-400 " />
          ) : (
            <IoMdArrowDropdown className="text-[20px] sm:text-[23px] text-gray-400 " />
          )}
        </div>
        {active && (
          <div className="w-full shadow-md rounded-md py-3 px-4 flex flex-col space-y-4">
            {options.map((item, index) => (
              <span
                key={index}
                className="text-[18px] sm:text-[20px] text-gray-800 cursor-pointer hover:text-green-600  hover:bg-gray-200 px-3 py-2 rounded-md "
                onClick={() => {
                  setSelected(item);
                  setActive(false); // option select karte hi dropdown close
                }}
              >
                {item}
              </span>
            ))}
          </div>
        )}
        <form className="space-y-6 w-full mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="text-[17px] sm:text-[20px] border border-gray-400 text-gray-400 rounded-md py-3 px-4 w-full placeholder:text-[17px] placeholder:sm:text-[19px] placeholder:text-gray-400 tracking-widest"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-[20px] sm:text-[23px] border border-gray-400 text-gray-400 rounded-md py-3 px-4 w-full placeholder:text-[17px] placeholder:sm:text-[20px] placeholder:text-gray-400 tracking-widest"
          />
          <input
            type="Number"
            placeholder="Mobile Number"
            className="text-[20px] sm:text-[23px] border border-gray-400 text-gray-400 rounded-md py-3 px-4 w-full placeholder:text-[17px] placeholder:sm:text-[20px] placeholder:text-gray-400 tracking-widest"
          />
          <textarea
            type="text"
            placeholder="Type Text"
            className="text-[20px] sm:text-[23px] border border-gray-400 text-gray-400 rounded-md py-3 px-4 w-full placeholder:text-[17px] placeholder:sm:text-[20px] placeholder:text-gray-400 tracking-widest h-[200px]"
          ></textarea>
        </form>
        <div className="bg-red-400 hover:bg-red-500 transition duration-500 max-w-[250px] flex items-center justify-center rounded-md text-white">
          <button className="text-[20px] sm:text-[23px] py-3 px-4">
            Submit feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
