import React, { useState } from 'react'
import { LuMoveLeft } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { FaPen } from "react-icons/fa";

const Profile = () => {
    const navigate = useNavigate();

    const [selectedGender , setSelectedGender] = useState(null);

    const handleMaleGender = ()=>setSelectedGender("Male");
    const handlePenClick =()=>{
    setSelectedGender(null);
    }

    const handleFemaleGender = ()=> setSelectedGender("Female");

  return (

    <>

    <div className=''>

        {/* 1  logo and button male and Female */}
        <div className='bg-red-500 h-65 p-4'>

             {/*Logo and Button  */}
        <div className='flex items-center gap-4  '>
            <LuMoveLeft  onClick={()=>navigate('/Account')} className='text-white font-bold text-xl'/>
            <div className="px-4 py-1 bg-black rounded-lg font-semibold tracking-widest text-white hover:border-1 duration-300 hover:border-red-500 hover:bg-yellow-500 hover:text-white">
            SBM
          </div>
        </div>

        {/* Male and Female */}
        <div className='flex gap-5 justify-center  mt-14'>

        {/* Male */}

        {(selectedGender === "Male" || selectedGender === null) && (
        <div className={`relative p-4 rounded-lg transition-all duration-500 ${selectedGender ===  "Male" ? "absolute left-1/8 top-0 -translate-x-1/2 z-10" : "relative"}`} onClick={() => handleMaleGender()}>
            
         <img className="h-20" src="male.svg" alt="" />
         <div className="text-white mt-2 flex justify-center">Male</div>

              {selectedGender === "Male" && (
           <FaPen
             className="absolute bottom-5 right-4 text-[15px] cursor-pointer"
                  onClick={(e) =>{e.stopPropagation() ;     handlePenClick()}}
           />
            )}
       </div>
        )}
                

        {/* Or Button */}
        {selectedGender=== null && 
        <>
        <div className='text-white font-semibold flex items-center'>or</div>
        </>
        }
        

        {/* Female */}
         {(selectedGender === "Female" || selectedGender === null) && (
        <div className={`relative p-4 rounded-lg transition-all duration-500 ${selectedGender ===  "Female" ? "absolute left-1/8 top-0 -translate-x-1/2 z-10" : "relative"}`} onClick={() => handleFemaleGender()}>
            
         <img className="h-20" src="Female.webp" alt="" />
         <div className="text-white mt-2 flex justify-center">Male</div>

              {selectedGender === "Female" && (
           <FaPen
             className="absolute bottom-5 right-4 text-[15px] cursor-pointer"
                  onClick={(e)=>{e.stopPropagation(); handlePenClick()}}
           />
            )}
       </div>
        )}           
        


        </div>

        </div>

        {/* First Name and Last Name */}
        <div className='mt-6 p-3'>
            <div className='border-b pb-1'>
                <input className='outline-none w-full' type="text" placeholder='First Name' />
            </div>

            <div className='mt-4 border-b pb-1'>
                <input className='w-full outline-none' type="text" placeholder='Last Name' />
            </div>

        </div>

        {/* Submit Button */}

        <div className='max-w-[100px] text-[18px] sm:text-xl mt-4 w-full mx-auto text-blue-600 font-semibold'>
            <button>Submit</button>
        </div>

        {/* Mobile Number And EMail  */}
        <div className='mt-6 p-3 '>

            <div className='border-b pb-1 flex justify-between'>
                <input className='outline-none w-full' type="text" placeholder='Mobile Number' />
                <div><button className='text-blue-600 font-semibold text-[14px]'>Update</button></div>
            </div>

            <div className='mt-4 border-b pb-1 flex justify-between'>
                <input className='w-full outline-none' type="text" placeholder='Email Id' />
                <div><button className='text-blue-600 font-semibold text-[14px]'>Update</button></div>
            </div>

        </div>

    </div>

    </>
  )
}

export default Profile