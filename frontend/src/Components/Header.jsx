import React, { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const lists = [
    { id: 2, name: "About Us", path: "/about-us" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact Us", path: "/contact-us" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header For Small Devices */}
      <header
        className={`fixed top-0 left-0 w-full z-50  py-3   transition-colors duration-300 ${
          isScrolled ? "bg-black text-white" : "bg-black/20"
        }`}
      >
        {/* Heading part  */}
        <div
          className={`flex gap-2 max-w-[1400px] mx-auto items-center justify-between px-3 py-1  transition-colors duration-300 `}
        >
          <div
            onClick={() => navigate("/")}
            className=" py-1 rounded-full max-w-[74px] w-full"
          >
            <img className=" h-8 w-18 rounded-full" src="SMB-LOGO.png" alt="" />
          </div>

          {/* bars for small devices */}
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden font-extrabold"
          >
            <HiBars3 className="text-3xl text-white font-extrabold" />
          </div>

          {/* for big devices */}

          <div className=" hidden md:flex font-bold text-[16px] text-white justify-between ml-6  gap-8 max-w-[400px] w-full">
            {lists.map((item) => (
              <div
                key={item.id}
                className="relative group whitespace-nowrap pb-1 hover:text-red-600"
              >
                <Link to={item.path}>
                  <span>{item.name}</span>
                </Link>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
              </div>
            ))}
          </div>

          {/* Search Bar  */}

          <div className="hidden md:flex items-center justify-between rounded-lg border border-white px-3 ml-4 min-w-[170px]  max-w-[450px] w-full">
            <input
              className="placeholder:text-white outline-none  w-full  text-white py-1 text-[14px] lg:text-[17px]"
              type="text"
              placeholder="Search SBM.com"
            />
            <IoSearchSharp className="text-white" />
          </div>

          {/* Icons */}
          <div className=" hidden  md:flex gap-5 items-center lg:gap-11 text-[17px] lg:text-xl mx-2 text-white font-extrabold max-w-[100px] lg:max-w-[150px] w-full">
            <div
              onClick={() => navigate("/Account")}
              className="pb-2 relative group  hover:text-red-700 "
            >
              <span className="relative">
                <FaRegUser className="" />
              </span>
              <span className="absolute w-0 h-[2px] left-0 bottom-0 bg-red-700 transition-all duration-500 group-hover:w-full"></span>
            </div>

            <div
              onClick={() => navigate("/WishList")}
              className="pb-2 relative group   hover:text-white "
            >
              <span className="relative hover:text-red-700">
                <LuHeart className="" />
              </span>
              <span className="bg-red-700  absolute bottom-4 text-[10px] left-3 rounded-full px-1 ">
                0
              </span>
              <span className="absolute w-0 h-[2px] left-0 bottom-0 bg-red-700 transition-all duration-500 group-hover:w-full"></span>
            </div>

            <div
              onClick={() => navigate("/AddToCart")}
              className="pb-2 relative group   "
            >
              <span className="relative hover:text-red-700">
                <GrCart className="" />
              </span>
              <span className="bg-red-700  absolute bottom-4.5 text-[10px] left-3.5 rounded-full px-1 ">
                0
              </span>
              <span className="absolute w-0 h-[2px] left-0 bottom-0 bg-red-700 transition-all duration-500 group-hover:w-full"></span>
            </div>
          </div>
        </div>

        {/* If Bars Clicked */}
        {open && (
          <>
            <div className="top-0 left-0  fixed p-4 z-50 text-white  h-screen w-full max-w-[380px] bg-black">
              {/* heading part */}
              <div className="1  flex items-center justify-between ">
                {/* Logo */}
                <div
                  onClick={() => navigate("/")}
                  className="border-white border py-1 rounded-full max-w-[74px] w-full  px-2"
                >
                  <img
                    className=" h-6 w-14 rounded-full "
                    src="SMB-LOGO.png"
                    alt=""
                  />
                </div>

                {/* x Button */}
                <div
                  onClick={() => setOpen(!open)}
                  className="text-2xl  text-red-500 "
                >
                  X
                </div>
              </div>

              {/* Button List */}
              <div className="font-bold tracking-wider mt-8">
                {lists.map((item) => (
                  <Link to={item.path}>
                    <div
                      onClick={() => setOpen(!open)}
                      key={item.id}
                      className="py-4 text-xl"
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Contact Details */}
              <div className="mt-5">
                <div className="flex items-center tracking-wider">
                  <BiPhoneCall /> <span>+91-7413-94-0716</span>
                </div>
                <div className="flex items-center mt-5  tracking-wider">
                  <MdOutlineMarkEmailUnread className="mr-2" />{" "}
                  <span>abhisheknaruka7773@gmail.com</span>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
