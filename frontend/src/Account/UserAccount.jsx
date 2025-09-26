import React from 'react'
import { MdStarPurple500 } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { IoCubeOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiMiniUserGroup } from "react-icons/hi2";
import exclusiveProducts from '../Data/Exclusive.collection';
import { FaRegUser } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineLanguage } from "react-icons/hi2";
import { FaUnlockAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoChatboxSharp } from "react-icons/io5";
import { AiTwotoneCopy } from "react-icons/ai";
import { GrCircleQuestion } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';



const UserAccount = () => {

    const navigate = useNavigate();

  return (
    <>
    
    <div className='p-4 py-6  mb-18'>

        {/*1. Name and some Styling */}
        <div className='bg-[#f0f5ff] p-5 max-w-[1300px] w-full mx-auto'>

            {/* Name and Star */}
            <div className='flex justify-between items-center'>
                {/* Name */}
            <div className='text-md font-semibold'>Login to get details </div>

            {/* Login button*/}
                <div onClick={()=>navigate('/RegisterLogin')} className=''>
                    <button className='relative group  rounded-2xl w-30 py-2 hover:text-white text-red-600 border border-red-500 font-semibold'>
                        <span className='relative z-10'>Login in</span>
                        <span className='absolute left-0 top-0 rounded-2xl w-0 h-full transition-all bg-red-600 duration-500 group-hover:w-full '></span>     
                    </button>
                </div>


            </div>

            {/* Explore and 1 image */}
            <div className='flex justify-between'> 
            
            <div className='flex items-center mt-3 gap-2 text-gray-800'>
                <div>Explore</div>
                <img className='w-[85px] h-[11px]' src="plusSilver.png" alt="" />
                <FaAngleRight className='text-[12px] '/>
            </div>

            <div className='flex items-center gap-1 mt-8 px-4 text-amber-400 border-1 border-amber-300 rounded-2xl'>
                <div><MdStarPurple500 /></div>
                <div className='text-black font-semibold'>0</div>
                </div>

            </div>

        </div>

        {/*2. Orders , wishList , About us , And helpCenter   */}

        <div className='mt-6 grid grid-cols-2 gap-4 max-w-[1300px] w-full mx-auto shadow-2xl rounded px-2 whitespace-nowrap pb-5'> 

            {/* Order */}
            <div onClick={()=>navigate('/Order')} className='flex items-center gap-1 border border-gray-400 px-3 py-2 rounded'> 
                <div><IoCubeOutline className='text-red-600 font-bold text-xl' /></div>
                <div className='font-semibold'>Orders</div>
            </div>

            {/* WishList */}
            <div onClick={()=>navigate('/WishList')} className='flex items-center gap-1 border border-gray-400  px-3 py-2 rounded'> 
                <div><IoMdHeartEmpty className='text-red-600 font-bold text-xl' /></div>
                <div className='font-semibold'>WishList</div>
            </div>

            {/* About us */}
            <div onClick={()=>navigate('/about-us')} className='flex items-center gap-1 border border-gray-400  px-3 py-2 rounded'> 
                <div><HiMiniUserGroup className='text-red-600 font-bold text-xl' /></div>
                <div className='font-semibold'>About Us</div>
            </div>

            {/* Help center */}
            <div onClick={()=>navigate('/Help')} className='flex items-center gap-1 border border-gray-400  px-3 py-2 rounded'> 
                <div><TfiHeadphoneAlt className='text-red-600 font-bold text-xl' /></div>
                <div className='font-semibold'>Help Center</div>
            </div>

        </div>

        {/* 3. Recently Viwed Items */}
        <div className='max-w-[1300px] w-full mx-auto mt-7 px-3 font-semibold text-[18px] sm:text-xl' >Recently Viewed Items</div>
        <div className='flex gap-2 mt-6 overflow-x-auto max-w-[1300px] w-full mx-auto shadow-2xl pb-4'>
            {exclusiveProducts.map((product  , index)=>(
                <div onClick={()=>navigate('/products/cart')} key={index} className='px-3 border border-gray-400 pb-2 min-w-35 max-w-48 whitespace-nowrap truncate rounded-lg mx-3 '>
                    <div className='flex justify-center my-2'><img className='h-20 w-15' src={product.img} alt="" /></div> 

                    <div className='font-bold my-1 text-red-600'><h1>{product.companyName}</h1></div>

                    <div className='font-semibold my-1 text-sm truncate'>{product.productName}</div>
                    
            </div>
            ))

            }
            
        </div>


        {/*4. Account Setting */}
        <div className='max-w-[1300px] w-full mx-auto mt-6'>

            <div className='font-semibold text-[18px] sm:text-xl'>Account Setting</div>
            
            {/* Edit Profile */}
            <div onClick={()=>navigate('/Profile')} className='flex justify-between items-center mt-5 px-2'>

                <div className='flex items-center gap-2'>
                <div><FaRegUser className='text-red-600 font-bold' /></div>
                <div className='text-[14px]'>Edit Profile</div>
                </div>

                <div>
                    <FaChevronRight  className='text-[12px] '/>
                </div>

                
    
           

            </div>

            {/* Saved Address */}
            <div onClick={()=>navigate('/Address')} className='flex justify-between items-center mt-5 px-2'>

                <div className='flex items-center gap-1.5'>
                <div><IoLocationSharp  className='text-red-600 font-bold text-[17px]' /></div>
                <div className='text-[14px]'>Saved Address</div>
                </div>

                <div>
                    <FaChevronRight  className='text-[12px] '/>
                </div>

                
            </div>

            {/* Select Language */}
            <div onClick={()=>navigate('/Language')} className='flex justify-between items-center mt-5 px-2'>

                <div className='flex items-center gap-1.5'>
                <div><HiOutlineLanguage  className='text-red-600 font-bold text-[17px]' /></div>
                <div className='text-[14px]'>Select Language</div>
                </div>

                <div>
                    <FaChevronRight  className='text-[12px] '/>
                </div>

                
            </div>

            {/* Privacy Center */}
            <div onClick={()=>navigate('/Privacy')} className='flex justify-between items-center mt-5 px-2'>

                <div className='flex items-center gap-1.5'>
                <div><FaUnlockAlt   className='text-red-600 font-bold text-[17px]' /></div>
                <div className='text-[14px]'>Privacy Center</div>
                </div>

                <div>
                    <FaChevronRight  className='text-[12px] '/>
                </div>

                
            </div>


        </div>

        {/*5. My Review */}
        <div  className='max-w-[1300px] w-full mx-auto mt-6'>

            <div className='font-semibold text-[18px] sm:text-xl'>My Activity</div>
            
            {/* Reviews */}
            <div onClick={()=>navigate('/Review')} className='flex justify-between items-center mt-5 px-2'>

                <div className='flex items-center gap-2'>
                <div><FaRegPenToSquare  className='text-red-600 font-bold' /></div>
                <div className='text-[14px]'>Reviews</div>
                </div>

                <div>
                    <FaChevronRight  className='text-[12px] '/>
                </div>

                
            </div>

            {/* Questions & Answer */}
            <div onClick={()=>navigate('/QueAndAns')} className='flex justify-between items-center mt-5 px-2'>

                <div className='flex items-center gap-1.5'>
                <div><IoChatboxSharp  className='text-red-600 font-bold text-[17px]' /></div>
                <div>Questions & Answer</div>
                </div>

                <div>
                    <FaChevronRight  className='text-[12px] '/>
                </div>

                
            </div>



        </div>

        {/*6. Feedback & Information */}
        <div className='max-w-[1300px] w-full mx-auto mt-6'>

            <div className='font-semibold text-[18px] sm:text-xl'>Feedback &  Information</div>

            {/*Help Center */}
            <div onClick={()=>navigate('/Help')} className='flex justify-between items-center mt-5 px-2'>

                <div className='flex items-center gap-1.5'>
                <div><GrCircleQuestion  className='text-red-600 font-bold text-[17px]' /></div>
                <div className='text-[14px]'>Help Center</div>
                </div>

                <div>
                    <FaChevronRight  className='text-[12px] '/>
                </div>

                
            </div>



        </div>

        {/* Logout Button */}
        <div className='max-w-[1300px] w-full mx-auto border border-gray-300 py-1 rounded mt-6 flex justify-center'>
            <button className=' text-red-600 font-semibold'>Log Out</button>
        </div>


    </div>
    </>
  )
}

export default UserAccount