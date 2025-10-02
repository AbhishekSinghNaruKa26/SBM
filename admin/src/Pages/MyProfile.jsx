import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuMessageSquareText } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";
import { FiEye } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";



const MyProfile = () => {
  const [personalOpen , setPersonalOpen]= useState(false);
  const[addressOpen , setAddressOpen]= useState(false)

  return (
    <>

    <div className=' max-w-[1500px] w-full mx-auto mb-10'>

      {/*1. Heading part of serach , date, notifications */}
      <div className='realtive flex justify-between items-center px-3 bg-red-500 text-white py-3 rounded gap-5 '>

        {/* Search bar */}
        <div className='flex border px-4 py-1 max-w-90 w-full   rounded-xl items-center'>
          <input type="text" name="" id="" placeholder='Search' className='outline-none w-full placeholder:text-white'  />
          <IoMdSearch />
        </div>

        {/* Date */}
        <div className='whitespace-nowrap hidden sm:block'>Thurday, 02 October</div>

        {/* Notification  icons */}
        <div className='relative flex gap-2 items-center md:gap-6 text-2xl'>
          <div className='relative bg-gray-200 p-2 rounded text-black '>
            <span className='absolute -top-2 -right-2  text-sm rounded-2xl px-1 bg-black text-white'>0</span>
            <LuMessageSquareText />
            </div>

          <div className='relative bg-gray-200 p-2 rounded text-black '>
            <IoMdNotificationsOutline />
              <span className='absolute -top-2 -right-2  text-sm rounded-2xl px-1 bg-black text-white'>0</span>
            </div>
        </div>
        

      </div>

      {/*2. My Proflie Heading and line */}
      <div className='flex items-center mt-4'>
       <span className='sm:text-xl font-semibold'> My Profile</span>
        <span className='h-0.5 bg-gray-400 flex-1 ml-4 mx-4'></span>
      </div>

      {/* 3. Admin Info*/}
      <div className='mt-4 flex items-center gap-5  shadow-2xl p-4'>

        <div className='relative'>
          <img src="self.jpeg" alt="" className='w-32 rounded-full' />
          <span className='absolute bottom-1 right-1 rounded-full border bg-white p-1'><MdOutlineCameraAlt /></span>
        </div>

        <div className='space-y-1'>
          <div className='whitespace-nowrap font-semibold sm:text-xl text-red-700'>Abhishek Singh Naruka</div>
          <div className='text-gray-800'>Admin</div>
          <div className='text-blue-800'>Jodhpur , India</div>
        </div>

      </div>

      {/*4. Personal Info */}
      <div className='mt-6 shadow-2xl bg-white p-4'>

        {/* Heading */}
        <div className='flex justify-between items-center'>
          <div className='text-red-600 font-semibold sm:text-lg'>Personal Information</div>
          <div onClick={()=>setPersonalOpen(!personalOpen)} className='flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-lg'>Edit <span><LuPencil /></span></div>
        </div>
        {personalOpen && 
        <>
        <div className='flex items-center justify-center inset-0 fixed z-50 bg-white bg-opacity-40 border-black border max-w-[310px] w-full mx-auto h-fit mt-80 '>

          <div>
          {/* CLose Button */}
          <div className='flex justify-end p-2 text-xl' onClick={()=>setPersonalOpen(!personalOpen)}><ImCancelCircle /></div><hr />

          {/* All Editable info */}
          <div className='px-4 space-y-2'>

          {/* Name */}
          <div className='mt-4 flex justify-between items-center '>
            <div>
            <div className='sm:text-lg font-semibold text-gray-700'>Name</div>
            <div className='text-[18px]'>Abhishek Singh Naruka</div>
            </div>

            <div><LuPencil /></div>
            
          </div> <hr />

          {/* Date Of Birth */}
          <div className='mt-4 flex justify-between items-center'>
            <div>
              <div className='sm:text-lg font-semibold text-gray-700'>Date Of Birth</div>
              <div className='text-[18px]'>25-07-2003</div>
            </div>

            <div><LuPencil /></div>
            
          </div><hr />

          {/* Email Addreess */}
          <div className='mt-4 flex justify-between items-center '>
            <div>
              <div className='sm:text-lg font-semibold text-gray-700'>Email Address</div>
            <div className='text-[18px]'>abhisheknaruka7773@gmail.com</div>
            </div>

            <div><LuPencil /></div>
            
          </div><hr />

          {/* Phone Number */}
          <div className='flex justify-between items-center'>
            <div>
              <div className='sm:text-lg font-semibold text-gray-700'>Phone Number</div>
              <div className='text-[18px]'>(+91)7413-94-0716</div>
            </div>

            <div><LuPencil /></div>
            
          </div><hr />

          {/* User Role */}
          <div className='flex items-center justify-between'>
            <div>
              <div className='sm:text-lg font-semibold text-gray-700'>User Role</div>
              <div className='text-[18px]'>Admin</div>
            </div>

            <div><LuPencil /></div>
            
          </div>

          </div>

          </div>

        </div>
        </>
        }

        {/* info */}
        <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4'>

          {/* Name */}
          <div className='mt-4'>
            <div className='sm:text-lg font-semibold text-gray-700'>Name</div>
            <div className='text-[18px]'>Abhishek Singh Naruka</div>
          </div>

          {/* Date Of Birth */}
          <div className='mt-4'>
            <div className='sm:text-lg font-semibold text-gray-700'>Date Of Birth</div>
            <div className='text-[18px]'>25-07-2003</div>
          </div>

          {/* Email Addreess */}
          <div className='mt-4 truncate'>
            <div className='sm:text-lg font-semibold text-gray-700'>Email Address</div>
            <div className='text-[18px]'>abhisheknaruka7773@gmail.com</div>
          </div>

          {/* Phone Number */}
          <div>
            <div className='sm:text-lg font-semibold text-gray-700'>Phone Number</div>
            <div className='text-[18px]'>(+91)7413-94-0716</div>
          </div>

          {/* User Role */}
          <div>
            <div className='sm:text-lg font-semibold text-gray-700'>User Role</div>
            <div className='text-[18px]'>Admin</div>
          </div>

        </div>
        

      </div>

      {/* 5. Address Info */}
      <div className='mt-6 shadow-2xl bg-white p-4'>

        {/* Heading */}
        <div className='flex justify-between items-center'>
          <div className='text-red-600 font-semibold sm:text-lg'>Address Information</div>
          <div onClick={()=>setAddressOpen(!addressOpen)} className='flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-lg'>Edit <span><LuPencil /></span></div>
        </div>
        {addressOpen && 
        <>
        <div className='flex items-center justify-center inset-0 fixed z-50 bg-white bg-opacity-40 border-black border max-w-[280px] w-full mx-auto h-fit mt-80 pb-4'>

          <div>
          {/* CLose Button */}
          <div className='flex justify-end p-2 text-xl' onClick={()=>setAddressOpen(!addressOpen)}><ImCancelCircle /></div><hr />

          {/* All Editable info */}
          <div className='px-4 space-y-2 w-full'>

          {/* Country */}
          <div className='mt-4 flex justify-between items-center'>
            <div>
            <div className='sm:text-lg font-semibold text-gray-700'>Country Name</div>
            <div className='text-[18px]'>India</div>
            </div>

            <div><LuPencil /></div>
            
          </div> <hr />

          {/* State Name */}
          <div className='mt-4 flex justify-between items-center'>
            <div>
              <div className='sm:text-lg font-semibold text-gray-700'>State Name</div>
              <div className='text-[18px]'>Rajasthan</div>
            </div>

            <div><LuPencil /></div>
            
          </div><hr />

          {/* City Name */}
          <div className='mt-4 flex justify-between items-center '>
            <div>
              <div className='sm:text-lg font-semibold text-gray-700'>City Name</div>
            <div className='text-[18px]'>Jodhpur</div>
            </div>

            <div><LuPencil /></div>
            
          </div><hr />

          {/* Postal Code */}
          <div className='flex justify-between items-center'>
            <div>
              <div className='sm:text-lg font-semibold text-gray-700'>Postal Code</div>
              <div className='text-[18px]'>342005</div>
            </div>

            <div><LuPencil /></div>
            
          </div>


          </div>

          </div>

        </div>
        </>
        }

        {/* info */}
        <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4'>

           {/* Country */}
          <div className='mt-4 flex justify-between items-center '>
            <div>
            <div className='sm:text-lg font-semibold text-gray-700'>Country Name</div>
            <div className='text-[18px]'>India</div>
            </div>
            
          </div>

          {/* State Name */}
          <div className='mt-4 flex justify-between items-center'>
            <div>
              <div className='sm:text-lg font-semibold text-gray-700'>State Name</div>
              <div className='text-[18px]'>Rajasthan</div>
            </div>
            
          </div>

          {/* City Name */}
          <div className='mt-4 flex justify-between items-center '>
            <div>
              <div className='sm:text-lg font-semibold text-gray-700'>City Name</div>
            <div className='text-[18px]'>Jodhpur</div>
            </div>
            
          </div>

          {/* Postal Code */}
          <div className='flex justify-between items-center'>
            <div>
              <div className='sm:text-lg font-semibold text-gray-700'>Postal Code</div>
              <div className='text-[18px]'>342005</div>
            </div>
            
          </div>
         
        </div>
        

      </div>

      {/*6. change Password and delete account  */}
      <div className='flex justify-end mt-10 text-xl'>

        <div className='space-y-5 '>
        <div className='flex items-center gap-2 bg-red-500 px-3 py-1 rounded text-white'>
          <FiEye />
          Change Password
        </div>

        <div className='flex items-center gap-2 bg-red-500 px-3 py-1 rounded text-white'>
          <MdDeleteOutline />
          Delete Account
        </div>

        </div>

      </div>


    </div>

    </>
  )
}

export default MyProfile