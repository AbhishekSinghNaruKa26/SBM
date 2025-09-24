import React from 'react'
import { useNavigate } from 'react-router-dom';
import { LuMoveLeft } from "react-icons/lu";
import { GoStar } from "react-icons/go";

const Review = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='bg-gray-200 h-screen'>

      {/* Heading And Navigation */}
      <div className='bg-red-500'>
    <div className='flex items-center gap-4 p-3 '>
            <LuMoveLeft  onClick={()=>navigate('/Account')} className='text-white font-bold text-xl'/>
            <div className='text-lg text-white font-semibold'>My Review</div>
        </div>

      </div>

      {/* Would you like to give review */}

      <div className='mt-4 p-3'>
        <h1 className='text-gray-600 text-sm sm:text-lg'>Would you like to give review  these purchase ?</h1>
      </div>

      {/* Product Details for review */}
      <div className='max-w-[1300px] w-full mx-auto p-3'>

        <div className='flex p-4 bg-white items-center gap-4'>

          <div>
            <img className='w-[100px]' src="haldi.jpeg" alt="" />
          </div>

          <div className=''>
            {/* Product Name */}
          <div className='font-semibold text-gray-600'> 
            SBM Haldi Powder
          </div>
          {/* Stars */}
          <div className='flex gap-3 mt-2'>
            < GoStar/>
            < GoStar/>
            < GoStar/>
            < GoStar/>
            < GoStar/>
          </div>

          </div>


        </div>

      </div>




    </div>
    </>
  )
}

export default Review