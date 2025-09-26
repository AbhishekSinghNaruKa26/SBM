import { useNavigate } from 'react-router-dom'
import { HiOutlineHome } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { BsShop } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { GrCart } from "react-icons/gr";


const FiexdFooter = () => {
    const navigate = useNavigate();

    

  return (
    <div>
        {/* Part-1 fixed button */}
              <div className='flex justify-between gap-2 text-[20px] bg-white fixed bottom-0 w-full max-w-[768px] md:hidden pb-2 px-3  z-80'>
        
                <div onClick={()=>navigate('/')} className='py-1.5 font-semibold'><div className='flex justify-center'><HiOutlineHome /></div><div className='text-[13px] flex justify-center'>Home</div></div>
                <div onClick={()=>navigate('/Account')} className='py-1.5 font-semibold'><div className='flex justify-center'><FaRegUser /></div><div className='text-[13px] flex justify-center'>Account</div></div>
                <div onClick={()=>navigate('/products')} className='py-1.5 font-semibold'><div className='flex justify-center'><BsShop /></div><div className='text-[13px] flex justify-center'>Collection</div></div>
                <div onClick={()=>navigate('/Search')} className='py-1.5 font-semibold'><div className='flex justify-center'><IoSearchSharp /></div><div className='text-[13px] flex justify-center'>Search</div></div>
                <div onClick={()=>navigate('/AddToCart')} className='py-1.5 font-semibold'><div className='flex justify-center'><GrCart /></div><div className='text-[13px] flex justify-center'>My Cart</div></div>
                
              </div>
    </div>
  )
}

export default FiexdFooter