import React, { useState } from 'react'


const LoginRegister = () => {

    const [signIn , setSignIn]= useState(true)

  return (
    <>
    <div className='flex justify-center items-center my-18 sm:my-0 sm:h-screen   p-5'>

    <div className='border p-6 max-w-[470px] w-full rounded'>

        {signIn ? (
        <div>
            {/* Sign In Form */}
            <div >

                <div className='flex justify-center font-semibold text-2xl'>
                    <h1>SB Masala</h1>
                </div>

                {/* Sign In */}
                <div className='mt-4 font-semibold'>
                    Sign in
                </div>

                {/* Heading */}
                <div className='text-[13px] mt-1'>
                    <p>Enter Your email and Password</p>
                </div>

                {/* Enter Email input */}
                <div className='border mt-5 rounded w-full'>
                    <input className='outline-none px-2 py-1 w-full' type="email" placeholder='Enter Your Email' />
                </div>

                {/* Enter Password Input */}
                <div className='border mt-4 rounded w-full'>
                    <input className='outline-none px-2 py-1 w-full ' type="password" placeholder='Enter Your Password' />
                </div>

                {/* Sign Up Button */}
                <div className='mt-4 flex justify-center '>

                    <button type='submit' onClick={(e)=>e.preventDefault() }  className='relative group  px-3 w-full py-2 bg-black  text-white rounded'> 

                        <span className='z-50 relative tracking-wider font-semibold'>Login</span>

                        <span className='absolute top-0 left-0 h-full bg-red-700  w-0 transition-all duration-500 group-hover:w-full'></span>

                    </button>    

                </div>

                {/* Forgotten password & dont have account */}
                <div className='mt-4 sm:flex space-y-2 justify-between' >
                    <p>Don't have an account 
                        <button className='relative mx-1.5 text-blue-800 font-semibold group'>
                            <span type='button' onClick={()=>setSignIn(false)} className='relative'>Sign Up</span>
                            <span className=' absolute left-0 bottom-0 h-[2px] w-0 transition-all duration-500 bg-blue-800 group-hover:w-full '></span>
                        </button>
                    </p>

                    <p>
                        <button className='relative mx-1 text-blue-800 font-semibold group'>
                            <span className='relative'>Forgotten Password</span>
                            <span className=' absolute left-0 bottom-0 h-[2px] w-0 transition-all duration-500 bg-blue-800 group-hover:w-full '></span>
                        </button>
                    </p>
                </div>

                {/* Or */}
                <div className="flex items-center my-3">
                    <div className="flex-1 border-t border-gray-400"></div>
                    <span className="px-3 ">or</span>
                    <div className="flex-1 border-t border-gray-400"></div>
                </div>

                {/* Countinue with Google */}

                <div className='flex justify-center'>
                    <button className='group relative px-4 py-2 bg-red-700 text-white w-full rounded font-semibold'>

                        <span className='relative z-10'>Countinue With Google</span>
                        <span className='absolute left-0 top-0 w-0 h-full bg-blue-600 transition-all duration-500 group-hover:w-full'></span>
                    </button>
                </div>

                {/* Privacy  Policy*/}
                <div className='mt-3'>
                    <p className='text-blue-800 font-semibold'>Privacy Policy</p>
                </div>


            </div>

        </div>

        ) :(
            // sign Up
        <div>
             {/* Sign  Up*/}

            <div>

                <div className='flex justify-center font-semibold text-2xl'>
                    <h1>SB Masala</h1>
                </div>

                {/* Sign In */}
                <div className='mt-4 font-semibold'>
                    Sign Up
                </div>

                {/* Heading */}
                <div className='text-[13px] mt-1'>
                    <p>Enter Your Name , Contact , email and Password</p>
                </div>

                {/* Enter Name Input */}
                <div className='border mt-4 rounded'>
                    <input className='outline-none px-2 py-1 w-full' type="text" placeholder='Enter Your Full Name' />
                </div>

                {/* Enter Contact Input */}
                <div className='border mt-4 rounded'>
                    <input className='outline-none px-2 py-1 w-full' type="number" placeholder='Enter Your Contact' />
                </div>

                {/* Enter Email input */}
                <div className='border mt-5 rounded'>
                    <input className='outline-none px-2 py-1 w-full' type="email" placeholder='Enter Your Email' />
                </div>

                {/* Enter Password Input */}
                <div className='border mt-4 rounded'>
                    <input className='outline-none px-2 py-1 w-full ' type="password" placeholder='Enter Your Password' />
                </div>

                {/* Enter Confirm Password Input */}
                <div className='border mt-4 rounded'>
                    <input className='outline-none px-2 py-1 w-full' type="password" placeholder='Enter Confirm Password' />
                </div>

                {/* Login Button */}
                <div className='mt-4 flex justify-center '>

                    <button type='submit' onClick={(e)=>e.preventDefault()} className='relative group  px-3 w-full py-2 bg-black  text-white rounded'> 

                        <span className='z-50 relative tracking-wider font-semibold'>Sign Up</span>

                        <span className='absolute top-0 left-0 h-full bg-red-700  w-0 transition-all duration-500 group-hover:w-full'></span>

                    </button>    

                </div>

                {/* Forgotten password & dont have account */}
                <div className='mt-4 sm:flex space-y-2 justify-between' >
                    <p>Already have an account 
                        <button className='relative mx-1.5 text-blue-800 font-semibold group'>
                            <span type='button' onClick={()=>setSignIn(true)} className='relative'>Sign In</span>
                            <span className=' absolute left-0 bottom-0 h-[2px] w-0 transition-all duration-500 bg-blue-800 group-hover:w-full '></span>
                        </button>
                    </p>
                </div>

                {/* Or */}
                <div className="flex items-center my-3">
                    <div className="flex-1 border-t border-gray-400"></div>
                    <span className="px-3 ">or</span>
                    <div className="flex-1 border-t border-gray-400"></div>
                </div>

                {/* Countinue with Google */}

                <div className='flex justify-center'>
                    <button className='px-4 py-2 bg-red-700 text-white w-full rounded font-semibold group relative'>
                        <span className='relative z-10'>Countinue With Google</span>
                        <span className='absolute top-0 left-0 h-full bg-blue-600 w-0 transition-all duration-500 group-hover:w-full'></span> 
                    </button>
                </div>

                {/* Privacy  Policy*/}
                <div className='mt-3'>
                    <p className='text-blue-800 font-semibold'>Privacy Policy</p>
                </div>


            </div>
 
        </div>

        )}

        
        
    </div>

    </div>
    </>
  )
}

export default LoginRegister