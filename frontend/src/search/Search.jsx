import { CgSearch } from "react-icons/cg";
import wishListProducts from "../Data/WishList";

const Search = () => {
  return (

    <div className="mt-25 w-full ">

      {/* 1  SearchBar  */}
      <div className="bg-red-500 h-65 flex items-center">

        {/* SearchBar Div */}
        <div className="max-w-[1300px] p-5 w-full mx-auto ">

          {/* Heading */}
        <div className="flex justify-center text-white text-2xl sm:tracking-widest font-bold ">Search the Best Products</div>

        {/* SearchBar */}
        <div className="flex justify-between items-center max-w-[500px] w-full mx-auto mt-8 border rounded text-white">
          <input type="text" className="outline-none p-2 placeholder:text-white" placeholder='Search SB Massala.com' />
          <span className="mx-2 text-xl font-bold"><CgSearch /></span>

        </div>

        </div>


      </div>

      {/* You Haven't Search Any products */}
      <div className="flex items-center justify-center mt-60">
        <div className="text-[17px] sm:text-lg" >You haven't search any products yet</div>
      </div>

      {/* Product */}
        {/* <div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-10 max-w-[1300px] p-4 mx-auto w-full'>

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
            

        </div> */}


    </div>
  )
}

export default Search