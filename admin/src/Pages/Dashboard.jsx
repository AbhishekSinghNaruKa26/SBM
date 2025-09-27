import React from 'react'

const Dashboard = () => {
  return (
    <>

    <div className='max-w-[1200px] w-full'>

        {/* 1 Total Amount  , Total Orders , Total Products , Total Users */}
        <div className='flex-wrap justify-center  flex gap-14'>

            {/* Total Amount */}
            <div className='bg-violet-500 text-white max-w-[200px] w-full px-4 py-6 w-fit rounded-md '>
                <div className='text-[18px] whitespace-nowrap '>Toatal Sales Amount</div>
                <div className='font-bold'>₹ 1 ,40, 251 </div>
            </div>

            {/* Total Orders */}
            <div className='bg-violet-500 text-white px-6 max-w-[200px] w-full py-6 w-fit rounded-md '>
                <div className='text-[18px] whitespace-nowrap '>Toatal Orders</div>
                <div className='font-bold'>36</div>
            </div>

            {/* Total Products */}
            <div className='bg-violet-500 text-white px-6 max-w-[200px] w-full py-6 w-fit rounded-md '>
                <div className='text-[18px] whitespace-nowrap '>Toatal Products</div>
                <div className='font-bold'>12</div>
            </div>

            {/* Total Users */}
            <div className='bg-violet-500 text-white px-6 max-w-[200px] w-full py-6 w-fit rounded-md '>
                <div className='text-[18px] whitespace-nowrap'>Total Users </div>
                <div className='font-bold'>21</div>
            </div>

        </div>

    </div>

    </>
  )
}

export default Dashboard