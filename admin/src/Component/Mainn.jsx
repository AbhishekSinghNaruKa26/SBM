import React from 'react'
import { HiOutlineChartBar } from "react-icons/hi2";
import { PiBasket } from "react-icons/pi";
import { BsHandbag } from "react-icons/bs";
import { BsFilePlus } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { TfiComments } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import Dashboard from '../Pages/Dashboard';
import AddProducts from '../Pages/AddProducts';
import Users from '../Pages/Users';
import Reviews from '../Pages/Reviews';
import MyProfile from '../Pages/MyProfile';
import Order from '../Pages/Order';
import Allproducts from '../Pages/Allproducts'
import Addproductss from '../Pages/Addproductss';
import UserDetails from '../Pages/UserDetails';
import Logout from '../Pages/Logout';




const Mainn = ({selected,setSelected}) => {



 const allButtons = [
    {id:1, icon:<HiOutlineChartBar/> , name:"Dashboard" },
    {id:2, icon:< PiBasket/> , name:"Orders" },
    {id:3, icon:<BsHandbag/> , name:"Products" },
    {id:4, icon:<BsFilePlus/> , name:"AddProducts" },
    {id:5, icon:<HiOutlineUsers/> , name:"Users" },
    {id:6, icon:<CgProfile/> , name:"My Profile" },   
    {id:7, icon:<MdOutlineLogout/> , name:"Logout" },
  ]



  return (
    <>

    <div className='max-w-[1500px] w-full   gap-6  scroll-y-auto'>

      {/* 1st div of info and button */}
      <div className='hidden md:block  p-3 max-h-[2150px] h-full  bg-red-500 text-white mt-16 w-[350px] fixed left-0 top-0 overflow-hidden'>

        {/* Profile Details */}
      <div className="mt-8 flex rounded-2xl items-center gap-3 py-3 shadow-2xl ">

        {/* Image */}
        <div>
          <img className="max-w-[65px] rounded-full border" src="self.jpeg" alt="" />
        </div>

        {/* Name And Email */}
        <div>
          <div className="font-bold tracking-wider">Abhishek Singh</div>
          <div className="text-sm">abhisheknaruka7773@gmail.com</div>
        </div>

      </div>

      {/* All Buttons of panel */}
      <div className="p-2 mt-10 space-y-7 font-semibold z-500">

        {allButtons.map((item , index)=>(
        <div key={index} onClick={() => {console.log("Clicked:", item.name); setSelected(item.name); }} className={`flex items-center gap-2 rounded p-2 text-xl ${selected===item.name ? "bg-gray-200 text-red-600" :  ""}`}>
          
          
        <div>{item.icon}</div>
        <div>{item.name}</div>

      </div>
        ))

        }
      
      
      </div>

      </div>

      {/* 2nd div of all work  */}
      <div className='p-4 mt-20 md:ml-[350px]   w-full'>
        {selected === "Dashboard" && <Dashboard />}
        {selected === "Orders" && <Order />}
        {selected === "Products" && <Allproducts/>}
        {selected === "AddProducts" && <Addproductss />}
        {selected === "Users" && <UserDetails />}
        {selected === "Reviews"&& <Reviews />}
        {selected === "My Profile" && <MyProfile />}
        {selected ==="Logout" && <Logout/>}
              
      </div>



    </div>

    </>
  )
}

export default Mainn