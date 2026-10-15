import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useEffect, useRef, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { auth } from '../Firebase/Setup';
import {useNavigate} from 'react-router-dom';
import api from '../../api'



const LoginRegister = () => {

     // State variables
    const [useMobile, setUseMobile] = useState(true);
    const [phone, setPhone] = useState("");
    const [confirmation, setConfirmation] = useState(null);
    const[otp,setOtp]=useState("");
    const[resendTimer , setResendTimer] = useState(0);
    const[email , setEmail] = useState("");
    const[emailOtpSent , setEmailOtpSent] = useState(false);
    const [user , setUser] = useState(null);




    // 1. Use a ref to store the persistent RecaptchaVerifier instance
    const recaptchaVerifierRef = useRef(null);
    const navigate = useNavigate();

    // timer for resend button

    useEffect(()=>{
        let timerId;
        if(resendTimer >0){
            timerId = setInterval(() => {
                setResendTimer(prevTime => prevTime - 1);
            }, 1000);
        }

        return()=>clearInterval(timerId);
    },[resendTimer])

    // for captcha verifier
    useEffect(() => {
        if (auth) {
            recaptchaVerifierRef.current = new RecaptchaVerifier(auth, "recaptcha-container", {
                size: "invisible",
            });
        }
    }, [auth]); 

    // --- FUNCTION: SEND OTP ---
    const sendOtp = async () => {

        if(resendTimer > 0) return;

        // Check if the verifier has been initialized
        const recaptcha = recaptchaVerifierRef.current;
        if (!recaptcha) {
            console.error("Recaptcha Verifier not initialized.");
            return;
        }

        try {

            setResendTimer(30);
            setConfirmation(null);

            // 3. REUSE the existing verifier instance
            const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptcha);
            
            // Store the confirmation result to use for OTP verification later
            setConfirmation(confirmationResult);
            console.log("Confirmation Result:", confirmationResult);
            
        } catch (error) {
            console.error("Error sending OTP:", error);
            
            // OPTIONAL: On error, you can reset the reCAPTCHA instance 
            // to allow for another attempt without refreshing the page.
            if (recaptcha && recaptcha.clear) {
                recaptcha.clear();
            }

            setResendTimer(0);
        }
    }

     // --- FUNCTION: phone VERIFY OTP ---
     const verifyOtp = async () => {
    if (!confirmation) return console.error("No confirmation result available.");

    let user;
    try {
        // Frontend OTP verification
        const userCredential = await confirmation.confirm(otp);
        user = userCredential.user;
        console.log("User verified:", user);
        setConfirmation(null);
        setOtp("");
    } catch (error) {
        console.error("Error verifying OTP:", error);
        alert("Invalid or expired OTP. Please try again.");
        setOtp("");
        setConfirmation(null);
        return; // stop further execution
    }

    try {
        // Backend save
        const idToken = await user.getIdToken(true);
        console.log("ID TOKEN:", idToken);

       const response = await api.post("/sbm/firebaseSave",
            { phoneNumber: user.phoneNumber },
            { headers: { Authorization: `Bearer ${idToken}` } }
        );

        if (response.data.success) {
      // ✅ Save tokens in localStorage
      localStorage.setItem("accessToken", response.data.accesstoken);
      localStorage.setItem("refreshToken", response.data.refreshtoken);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      console.log("SavedUser :", response.data.user);
      alert("Login successful !");
      navigate('/');
    }

    } catch (error) {
        console.error("Error saving user to DB:", error);
        alert("User verified but failed to save to DB. Try again later.");
    }
    }

    // --- FUNCTION: SEND EMAIL OTP ---
    const sendEmailOtp = async()=>{
        console.log("BASE_URL 👉", import.meta.env.VITE_API_URL);

        try {
           const response =  await api.post('/sbm/sendotp',{email} )
            if(response.data.success){
                setEmailOtpSent(true)
                alert("Otp Sent Successfully");
            }

        } catch (error) {
            console.error(error)
        }
    }

    // --- FUNCTION: VERIFY EMAIL OTP ---
    const verifyEmailOtp = async()=>{
        try {
          const response =  await api.post('/sbm/verifyotp',
                {email, otp}
            )

           if (response.data.success) {
      // ✅ Save token in localStorage
      localStorage.setItem("accessToken", response.data.accesstoken);

      // (Optional) refresh token agar chahiye
      localStorage.setItem("refreshToken", response.data.refreshtoken);

      // ✅ User data bhi store kar sakta hai (for quick access)
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // ✅ Navigate to home or profile
      navigate('/');
    }
        } catch (error) {
            console.error(error)
        }
    }

    // useEffect
    useEffect(()=>{
        const saveduser = localStorage.getItem("user");
        console.log("saved User :", saveduser);

        if(saveduser){
            setUser(JSON.parse(saveduser));
        }
        
    },[])
   



  return (
    <>
    <div className='flex justify-center items-center my-18 sm:my-0 sm:h-screen   p-5'>

    <div className='border p-6 max-w-[470px] w-full rounded'>

        {useMobile ? (
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
                    <p>Enter Your phone or email</p>
                </div>

                <div className='' >
                <PhoneInput 
                className="w-full"
                country={"in"}
                value={phone}
                onChange={(phone)=>setPhone("+" + phone)}
                />
                </div>


                {/* Send otp button */}
                <div onClick={sendOtp} className={`flex justify-center mt-3 rounded w-full border font-semibold py-1 ${resendTimer >0 ? 'bg-gray-400 text-gray-700' :'bg-red-700 text-white'}`}>
                    {confirmation && resendTimer > 0 ?(
                        <button disabled={true}>Resend Otp in {resendTimer}s</button>
                    ) : resendTimer >0 ?(
                        <button disabled={true}>Sending Otp...</button>
                    ) :(
                        <button>{confirmation ? "Resend Otp" :"Send Otp "}</button>
                   )
                }

                </div>

                {/* empty div for recpatcha */}
                <div id='recaptcha-container'> </div>

                {/* Enter Otp Here and verify also */}
                {confirmation && (
                    <>
                    <div className='w-full border mt-4 px-4 py-1'>
                    <input value={otp} onChange={(e)=>setOtp(e.target.value)} className='w-full outline-none' type="text" placeholder='Enter Otp' />
                </div>

                {/* Verfiy Otp Button */}
                <div onClick={verifyOtp} className='flex justify-center mt-3 w-full border py-1 bg-red-500 text-white'>
                    <button>Verfiy Otp</button>
                </div>
                </>
                )}
                

                {/* use Email */}
                <div className='mt-4 flex space-y-2 justify-end' >
                   
                    <p>
                        <button onClick={()=>setUseMobile(!useMobile)} className='relative mx-1 text-blue-800 font-semibold group'>
                            <span className='relative'>Use Email</span>
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
            // Use Email
        <div>
             {/* Use Email*/}

            <div>

                <div className='flex justify-center font-semibold text-2xl'>
                    <h1>SB Masala</h1>
                </div>

                {/* Sign In */}
                <div className='mt-4 font-semibold'>
                    Sign In
                </div>

                {/* Heading */}
                <div className='text-[13px] mt-1'>
                    <p>Enter Your Email Id</p>
                </div>

               
                {/* Enter Email input */}
                <div className='border mt-5 rounded'>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className='outline-none px-2 py-1 w-full' type="email" placeholder='Enter Your Email' />
                </div>
              
                {/* Send otp button */}
                <div onClick={sendEmailOtp} className={`flex justify-center mt-3 rounded w-full border font-semibold py-1 ${resendTimer >0 ? 'bg-gray-400 text-gray-700' :'bg-red-700 text-white'}`}>
                    {confirmation && resendTimer > 0 ?(
                        <button disabled={true}>Resend Otp in {resendTimer}s</button>
                    ) : resendTimer >0 ?(
                        <button disabled={true}>Sending Otp...</button>
                    ) :(
                        <button>{confirmation ? "Resend Otp" :"Send Otp "}</button>
                   )
                }

                </div>

                {/* empty div for recpatcha */}
                <div id='recaptcha-container'> </div>


                {/* Enter Otp Here and verify also */}
                {emailOtpSent && (
                    <>
                    <div className='w-full border mt-4 px-4 py-1'>
                    <input value={otp} onChange={(e)=>setOtp(e.target.value)} className='w-full outline-none' type="text" placeholder='Enter Otp' />
                </div>

                {/* Verfiy Otp Button */}
                <div onClick={verifyEmailOtp} className='flex justify-center mt-3 w-full border py-1 bg-red-500 text-white'>
                    <button>Verfiy Otp</button>
                </div>
                </>
                )}


                {/* Forgotten password & dont have account */}
                <div className='mt-4 flex space-y-2 justify-end' >
     
                        <button className='relative mx-1.5 text-blue-800 font-semibold group'>
                            <span type='button' onClick={()=>setUseMobile(!useMobile)} className='relative'>Use Mobile</span>
                            <span className=' absolute left-0 bottom-0 h-[2px] w-0 transition-all duration-500 bg-blue-800 group-hover:w-full '></span>
                        </button>

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