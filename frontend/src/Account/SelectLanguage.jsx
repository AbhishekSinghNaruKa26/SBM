import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LuMoveLeft } from "react-icons/lu";

const SelectLanguage = () => {

  const navigate =useNavigate();

  return (
    <div>

      {/* Heading And Navigate Button */}
      <div className='bg-red-500'>
        <div className='flex items-center gap-4 p-3 '>
            <LuMoveLeft  onClick={()=>navigate('/Account')} className='text-white font-bold text-xl'/>
            <div className='text-lg text-white font-semibold'>Select Language</div>
        </div>

      </div>

      {/* List Of Languages */}
      <div className='p-4 space-y-5 mt-4'>

        {/* Hindi */}
        <div className='border flex justify-between items-center px-3 py-1 rounded border-gray-400'>
          <div className='flex gap-3'>
          <div><input type="checkbox" name="" id="" /></div>
          <div> हिन्दी </div>
        </div>

          <div><img className='h-[60px]' src="hindi.png" alt="" /></div>
        </div>

        {/* English */}
        <div className='border flex justify-between items-center px-3 py-1 rounded border-gray-400'>  
          <div className='flex gap-3'>
          <div><input type="checkbox" name="" id="" /></div>
          <div> English </div>
        </div>

          <div><img className='h-[60px]' src="english.webp" alt="" /></div>
        </div>

      </div>

    </div>
  )
}

export default SelectLanguage