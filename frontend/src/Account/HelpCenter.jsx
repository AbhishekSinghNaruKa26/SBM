import React, { useState } from 'react'
import { LuMoveLeft } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const HelpCenter = () => {

  const navigate = useNavigate();

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
    <>
    <div className=''>

      {/* Heading And Navigation  */}
            <div className='bg-red-500'>
                <div className='flex items-center gap-4 p-3 '>
                        <LuMoveLeft  onClick={()=>navigate('/Account')} className='text-white font-bold text-xl'/>
                        <div className='text-lg text-white font-semibold'>Help Center</div>
                    </div>
            
            </div>

      {/* Search bar for fing problems */}
      <div className="max-w-[1100px] w-full mx-auto space-y-4 mt-4 sm:mt-0 p-2">
              <div
                className="w-full border border-gray-400 rounded-md py-3 px-4  flex justify-between items-center"
                onClick={() => setActive(!active)}
              >
                <span className="text-[20px] sm:text-[23px] text-gray-400 ">
                  {selected}
                </span>{" "}
                {active ? (
                  <IoMdArrowDropup className="text-[20px] sm:text-[23px] text-gray-400 " />
                ) : (
                  <IoMdArrowDropdown className="text-[20px] sm:text-[23px] text-gray-400 " />
                )}
              </div>
              {active && (
                <div className="w-full shadow-md rounded-md py-2 pb-8 px-4 flex flex-col space-y-2">
                  {options.map((item, index) => (
                    <span
                      key={index}
                      className="text-[18px] sm:text-[20px] text-gray-800 cursor-pointer hover:text-green-600  hover:bg-gray-200 px-3 py-2 rounded-md border-b"
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
             
              <div className="bg-red-400 hover:bg-red-500 mt-10 transition duration-500 max-w-[150px] w-full mx-auto flex items-center justify-center rounded-md text-white">
                <button className="text-[17px] sm:text-[20px] py-2 px-3">
                  Submit
                </button>
              </div>
      </div>

      {/* Our Information */}
      <div className='border-t fixed bottom-0 w-full p-3'>

        <div className='flex justify-between text-[12px] max-w-[1300px] w-full mx-auto sm:text-[15px]'>

          <div className='text-center'>Orignal <br /> Products</div>

          <div className='text-center'>Cash On <br /> Delivery</div>

          <div className='text-center'>Free & Easy <br /> Dispatch</div>

          <div className='text-center'>100% Buyer <br /> Protection</div>
 

        </div>

      </div>

    </div>
    </>
  )
}

export default HelpCenter