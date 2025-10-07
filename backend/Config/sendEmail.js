import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const trasport = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:process.env.GMAIL_USER,
        pass:process.env.GMAIL_PASS
    }

})

const sendEmail = async(to,subject,html)=>{
    try {

        const result = await trasport.sendMail({
            from:`"SBM" <${process.env.GMAIL_USER}>`,
            to:to,
            subject:subject,
            html:html
        })

        console.log("Email Sent Successfully");
        
        
    } catch (error) {
        console.error("Error sending email:", error);
    throw error;
    }
}

export default sendEmail;