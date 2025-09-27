import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi2";
import { PiBasket } from "react-icons/pi";
import { BsHandbag } from "react-icons/bs";
import { BsFilePlus } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { TfiComments } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";


const Header = () => {

  const [open , setOpen] = useState(false);
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

    {/* Header */}
    <div className="p-3 py-4 md:p-4 bg-red-500 text-white flex justify-between items-center">

      {/* Logo */}
      <div className="flex items-center gap-3 font-semibold bg-black p-1 rounded"><img className="max-w-[70px]" src="SMB-LOGO.png" alt="" /></div>

      {/* bars */}
      <div onClick={()=>setOpen(!open)} className="text-[25px] md:hidden"><HiBars3 /></div>

    </div>

    {/* If bars clicked */}
    {open &&
    <>
    <div className="bg-red-500 max-w-[350px] w-full h-screen absolute top-0 left-0 text-white p-3">

      {/* Logo and Cross */}
      <div className="flex justify-between border-b  pb-3">

        {/* Logo */}
        <div className="flex items-center gap-3 font-semibold bg-black p-1 rounded"><img className="max-w-[70px]" src="SMB-LOGO.png" alt="" /></div>

        {/* Cross */}
        <div onClick={()=>setOpen(!open)} className="text-2xl"><IoCloseSharp /></div>
      </div>
      

      {/* Profile Details */}
      <div className="mt-8 flex rounded-2xl items-center gap-4 shadow-2xl py-3">

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
    </>

    }

  
    </>

  )
}

export default Header