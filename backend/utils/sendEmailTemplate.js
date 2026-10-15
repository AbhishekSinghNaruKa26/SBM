

export const sendEmailOtp = (otp)=>{
    return `
    <div>
    <h1>From SBM</h1>
     <h2>Your OTP Code</h2>
            <p>Use the following OTP to login:</p>
            <h1>${otp}</h1>
            <p>This code will expire in 5 minutes.</p>
    </div>
    `
}