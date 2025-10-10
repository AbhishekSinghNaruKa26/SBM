import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});


const sendEmail = async(to, subject, html) => {
    try {
        const result = await transport.sendMail({
            from: `"SBM" <${process.env.GMAIL_USER}>`,
            to: to,
            subject: subject,
            html: html
        });
        console.log("Email Sent Successfully:", result);
        return result;
    } catch (error) {
         console.error("Full Nodemailer Error:", error); // 👈 exact error print
        throw error;
    }
}

export default sendEmail;
