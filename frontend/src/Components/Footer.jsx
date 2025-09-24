import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full mb-4 md:mb-0">
        {/* part -1 bg-image */}

        <div className='bg-[url("Footer.webp")] w-full h-auto min-h-[300px] bg-center bg-cover flex justify-center items-center px-6'>
          <div className=" text-white font-bold text-xl w-full max-w-[740px] mx-auto">
            <div className="max-w-[740px] w-full mx-auto text-center mb-6 sm:text-[42px] text-[26px] tracking-wider">
              <h1>Subcribe To Our NewSletter</h1>
            </div>

            <div className="max-w-[640px] w-full mx-auto flex items-center justify-between px-3 bg-[#00000070] rounded">
              <input
                className="flex-1 font-normal outline-none py-2 text-white bg-transparent placeholder-gray-300"
                type="text"
                placeholder="Enter Email"
              />
              <button className="text-white text-xl pl-3 flex items-center justify-center">
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>

        {/* part -2 Footer */}

        <div className=" bg-black text-white py-8  ">
          {/* logo and details */}
          <div className="w-full max-w-[1266px] mx-auto md:flex md:justify-between md:items-center md:text-[18px] px-6">
            {/* logo */}
            <div className="">
              <span className="bg-red-500 font-bold tracking-widest text-white px-2 py-1 rounded">
                SBM
              </span>
            </div>

            {/* All List Button */}
            <div className="max-w-[590px] mx-auto w-full mt-4">
              <ul className="columns-2 sm:columns-3 gap-9 lg:flex lg:items-center whitespace-nowrap  font-semibold  leading-10">
                <li className="">Overview</li>
                <li className="">Products</li>
                <li className="">Easy Chef</li>
                <li className="">Tasteeto</li>
                <li className="">Recipes</li>
                <li className="">CSR</li>
                <li className="">Careers</li>
                <li className="">Contact</li>
              </ul>
            </div>
          </div>

          {/* Address and social media icons  */}

          <div className=" w-full max-w-[1266px] mx-auto  my-5 px-3">
            <div className="sm:flex justify-between">
              {/* 1st one */}
              <div className="w-full max-w-[417px]">
                {/* Company Name */}
                <div className="">
                  <h1 className="font-semibold whitespace-nowrap truncate">
                    Shree Balaji Masala Food Products Pvt.Ltd.
                  </h1>
                </div>

                {/* Address */}
                <div className=" flex items-center gap-3 mt-3">
                  <div>
                    <GrLocation />
                  </div>

                  <div>
                    <p>
                      2nd Floor , Near Yellow Tank , Kudi Bhagtasni Housing
                      Board (West).
                    </p>
                    <p>Jodhpur - 342005.</p>
                  </div>
                </div>

                {/* Contact Number */}
                <div className="flex items-center gap-3 mt-3">
                  <div>
                    <MdOutlineLocalPhone />
                  </div>

                  <div>+91-74-1394-0716</div>
                </div>

                {/* CIN and Privacy Policy */}
                <div className="text-[#5e5e5e] mt-2 text-[13px] tracking-wider">
                  CIN: U15100MH2020PTC339738
                </div>
                <div className="text-gray-400 mt-2 lg:hidden">
                  Privacy Policy
                </div>
              </div>

              {/* 2nd One */}
              <div className="flex mt-6 gap-5 text-2xl">
                <div>
                  <BsInstagram />
                </div>
                <div>
                  <SlSocialFacebook />
                </div>
                <div>
                  <RiTwitterXLine />
                </div>
                <div>
                  <SlSocialYoutube />
                </div>
              </div>
            </div>

            {/* CopyRight  */}

            <div className="md:flex md:justify-between text-sm mt-5 tracking-wider text-[#5e5e5e]">
              <div>
                Copyright © 2025 Shree Balaji Spices. All rights reserved.
              </div>
              <div className="flex items-center gap-2 mt-2">
                Made With <FaRegHeart className="text-red-500 " /> by ABHSA{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
