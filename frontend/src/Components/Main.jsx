import React from 'react'
import exclusiveProducts from '../Data/Exclusive.collection'
import ProductLove from '../Main.Part/ProductLove'
import DetailContent from '../Main.Part/DetailContent'

const Main = () => {
  return (
    <>

    <div className='max-w-[1400px]  w-full mb-24 mx-auto  mt-8'>

        {/* Heading */}
        <div className='w-full max-w-[220px] whitespace-nowrap font-semibold mx-auto text-xl md:text-2xl'> SBM Exclusive Collection </div>

        {/* Exclusive Product  */}

        <div className='flex gap-7 mt-6 overflow-x-auto w-full mx-auto'>
            {exclusiveProducts.map((product  , index)=>(
                <div key={index} className='px-3 border border-black min-w-48 max-w-48 whitespace-nowrap truncate rounded-lg mx-3 '>
                    <div className='flex justify-center my-2'><img className='h-30 w-20' src={product.img} alt="" /></div> 

                    <div className='font-bold my-1 text-red-600'><h1>{product.companyName}</h1></div>

                    <div className='font-semibold my-1'>{product.productName}</div>

                    <div className='text-black my-1'>{product.star}</div>

                    <div>
                        <span className='pr-2 text-[14px] line-through' >{product.orignal}</span>
                        <span className='text-[16px]'>{product.price}</span>
                    </div>

                    <div className=' my-2 rounded-lg text-white flex justify-center'>

                      <button className='group relative bg-black rounded-lg py-1 px-6 '>

                        <span className='relative z-10'> Buy It Now</span>

                        <span className='rounded-lg absolute top-0 w-0 left-0 h-full bg-red-600 transition-all duration-500 group-hover:w-full'></span>
                      
                      </button>


                    </div>
                    
            </div>
            ))

            }
            
        </div>

        {/* Products You Will Love */}
       <ProductLove />

       {/* Detail Content */}
       <DetailContent />

    </div>

    </>
  )
}

export default Main