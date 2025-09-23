import React from 'react'
import wishListProducts from '../Data/WishList'

const WishList = () => {
    
  return (
    <div className=' my-18 p-4 w-full'>

        {/* Heading */}
         <div className="flex justify-center items-center bg-gray-200 py-4 max-w-[1300px] w-full mx-auto px-5">
            <div className='sm:flex justify-between items-center w-full p-4 '>
            <div className='text-2xl tracking-widest custom-font border-b max-w-[101px] w-full mx-auto sm:mx-0'> WishList</div>

            <div className='mt-4 sm:mt-0 text-sm  max-w-[101px] w-full mx-auto sm:mx-0'>Home/ WishList</div>
            </div>
            
        </div>

        {/* Product */}
        <div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-10 max-w-[1300px] mx-auto w-full'>

            {wishListProducts.map((product,index)=>(

                <div key={index}  className='border space-y-2  max-w-[320px] p-5 w-full mx-auto rounded'>

                <div className='flex items-center max-h-70 min-h-70'>
                    <img className='max-h-[300px] w-full h-auto ' src={product.img} alt="" />
                </div>

                <div className='my-1'>
                    <h1 className='font-bold'>{product.companyName}</h1>
                </div>

                <div>
                    <p className=''>{product.productName}</p>
                </div>

                <div className='space-x-2'>
                    <span className='line-through'>{product.orignal}</span>
                    <span>{product.price}</span>
                </div>

                <div className=' flex justify-center my-3'>

                    <button className='relative group w-full py-2 bg-black text-white rounded'>
                        <span className='relative z-10'> Buy It Now</span>
                        <span className='absolute h-full w-0 left-0 top-0 bg-red-700 transition-all duration-500 group-hover:w-full'></span>
                       
                    </button>

                </div>

            </div>
            ))

            }
            

        </div>


    </div>
  )
}

export default WishList