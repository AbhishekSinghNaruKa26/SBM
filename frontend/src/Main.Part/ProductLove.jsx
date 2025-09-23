import {motion} from 'framer-motion';
import productLove from '../Data/ProductLove'

const ProductLove = () => {
  return (

    <div className='w-full max-w-[1400px]  mt-24'>

      {/* Heading */}

      <div className='font-bold text-3xl text-center w-full max-w-[400px] py-1 px-4 mx-auto '>Products You Will Love</div>

      {/* Product Details */}
      {productLove.map((Details, index)=>(
        
        <div key={index} className={`flex flex-col md:flex-row  mt-12 py-2 w-full max-w-[1100px] mx-auto px-6 md:flex md:gap-6
           ${index %2 !==0 ? "md:flex-row-reverse" : "" }`}>

        {/* Iamge */}
        <div className='flex justify-center'><img className='rounded-lg  h-auto w-full max-w-[450px] md:min-w-[350px]' src={Details.img} alt="" /></div>

        {/* Description */}
        <div className=' flex justify-center text-2xl  font-bold mt-2 md:mt-0 w-full mx-auto max-w-[400px] '>
          <div>
          <h1 className='text-2xl md:text-3xl mt-2'>{Details.name}</h1>
          <p className='mt-2 text-[16px] leading-7  md:text-lg font-semibold text-gray-800'>{Details.text}</p>

          <div className=' max-w-[400px] w-full mx-auto'>
            <button
             className='relative overflow-hidden bg-black text-[16px] text-white font-semibold px-6 py-3 rounded mt-6 shadow-2xl group'>

          <span className="relative z-10">View More</span>
        {/* Red background wipe effect */}
        <span className="absolute left-0 top-0 h-full w-0 bg-red-600 transition-all duration-500 group-hover:w-full"></span>

             </button>
            </div>



          </div>


        </div> 

      </div>
      ))

      }

    </div>
  )
}

export default ProductLove