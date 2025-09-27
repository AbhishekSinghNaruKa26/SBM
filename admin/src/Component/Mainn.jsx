import React from 'react'
import { useState } from 'react';
import { HiOutlineChartBar } from "react-icons/hi2";
import { PiBasket } from "react-icons/pi";
import { BsHandbag } from "react-icons/bs";
import { BsFilePlus } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { TfiComments } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import Dashboard from '../Pages/Dashboard';
import Orders from '../Pages/Orders';
import Product from '../Pages/Products';
import AddProducts from '../Pages/AddProducts';
import Products from '../Pages/Products';
import Users from '../Pages/Users';
import Reviews from '../Pages/Reviews';
import MyProfile from '../Pages/MyProfile';


const Mainn = () => {

  const [selected , setSelected] = useState(null);

 const allButtons = [
    {id:1, icon:<HiOutlineChartBar/> , name:"Dashboard" },
    {id:2, icon:< PiBasket/> , name:"Orders" },
    {id:3, icon:<BsHandbag/> , name:"Products" },
    {id:4, icon:<BsFilePlus/> , name:"Add Products" },
    {id:5, icon:<HiOutlineUsers/> , name:"Users" },
    {id:6, icon:<TfiComments/> , name:"Reviews" },
    {id:7, icon:<CgProfile/> , name:"My Profile" },   
    {id:8, icon:<MdOutlineLogout/> , name:"Logout" },
  ]



  return (
    <>

    <div className='md:grid grid-cols-[330px_1fr] gap-6 h-screen scroll-y-auto'>

      {/* 1st div of info and button */}
      <div className='hidden md:block w-full p-3 bg-red-500 text-white mt-16 max-w-[330px] min-w-[250px]'>

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
      <div className="p-2 mt-10 space-y-7 font-semibold">

        {allButtons.map((item , index)=>(
        <div onClick={()=>setSelected(item.id)} key={index} className={`flex items-center gap-2 rounded p-2 text-xl ${selected===item.id ? "bg-gray-200 text-red-600" :  ""}`}>

        <div>{item.icon}</div>
        <div>{item.name}</div>

      </div>
        ))

        }
      
      
      </div>

      </div>

      {/* 2nd div of all work  */}
      <div className='p-4 mt-20'>
        {selected === 1 && <Dashboard />}
        {selected === 2 && <Orders />}
        {selected === 3 && <Products />}
        {selected === 4 && <AddProducts />}
        {selected === 5 && <Users />}
        {selected === 6 && <Reviews />}
        {selected === 7 && <MyProfile />}      
      </div>



    </div>

    </>
  )
}

export default Mainn