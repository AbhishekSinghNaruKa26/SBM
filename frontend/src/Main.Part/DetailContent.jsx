import React from 'react'
import servicesDeatils from '../Data/ServicesDetails'

const DetailContent = () => {
  return (

    <div className='w-full max-w-[1200px] mx-auto px-5 mt-20 '>

        <div className='mb-10 max-w-[200px] w-full mx-auto'>
            <h1 className='text-xl font-semibold'>Why Choose SBM ?</h1>
        </div>

        <div className='md:flex grid sm:grid-cols-2 h-auto gap-7 md:gap-9 overflow-x-auto  p-3' >

        {servicesDeatils.map((item , index)=>(
        <div key={index} className='flex justify-center items-center hover:translate-y-[-10px] '>
         <div  className=' max-w-[306px] min-w-[180px] w-full  p-3 shadow-2xl rounded-lg border'>

        <div>
            <div className='flex justify-center items-center'><img className='h-[40px] w-[40px] ' src={item.img} alt="" /></div>
        </div>

        <div className='mt-4 flex justify-center items-center'>
            <h1 className='font-bold md:text-[15px]  text-[16px] text-[#001e2b] whitespace-nowrap'>{item.title}</h1>
        </div>

        <div className='mt-1 flex justify-center items-center text-center   '>
            <p className='text-[#5c6c75] '>{item.details}</p>
        </div>

        </div>
        </div>
        ))

        }
        </div>
        

    </div>
  )
}

export default DetailContent