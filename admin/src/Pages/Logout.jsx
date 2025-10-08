import React from 'react'

const Logout = () => {
  return (
    <>

    <div>

        <div className='flex justify-center items-center inset-0 z-50 fixed bg-black/30'>
            <div className=''>
            <div>
                <h1 className='sm:text-xl'>Do you really want to logout ?</h1>
            </div>

            <div className='flex justify-center gap-10 mt-6'>
               <button className="px-8 py-2 bg-red-600 text-white rounded hover:bg-red-700">Yes</button>
               <button className="px-8 py-2 bg-gray-300 rounded hover:bg-gray-400">No</button>
            </div>

            </div>

        </div>

    </div>

    </>
  )
}

export default Logout