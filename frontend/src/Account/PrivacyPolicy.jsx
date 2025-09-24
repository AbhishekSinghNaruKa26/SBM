import React from 'react'
import { LuMoveLeft } from "react-icons/lu";
import { useNavigate } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";

const PrivacyPolicy = () => {

  const navigate = useNavigate();

  return (
    <>
    <div>

      {/* Heading And Navigate Button */}
      <div className='bg-red-500'>
          <div className='flex items-center gap-4 p-3 '>
            <LuMoveLeft  onClick={()=>navigate('/Account')} className='text-white font-bold text-xl'/>
            <div className='text-lg text-white font-semibold'>Privacy Policy</div>
      </div>

      </div>

      {/* Select Language Button */}
      <div className='mt-4  flex  justify-end px-5'>

        <div className='flex items-center gap-4 border w-fit px-5 py-1 '>
        <div>English</div>
        <div><IoIosArrowDown /></div>
        </div>

      </div>

      {/* All Description of Privacy Policy */}
      <div className='p-3 text-center'>

        <div>
          <p>Effective Date: 24 September 2025

Balaji Masala (“we,” “our,” or “us”) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our website or services, you agree to the terms of this Privacy Policy.

1. Information We Collect

We may collect personal and non-personal information when you interact with our website or services, including:

Personal Information: Name, email address, phone number, shipping/billing address, payment information, and other details you provide when placing orders or contacting us.

Non-Personal Information: Browser type, device information, IP address, pages visited, and other usage data collected automatically through cookies, analytics tools, or server logs.

2. How We Use Your Information

The information we collect is used for the following purposes:

To process and fulfill your orders, including shipping and payment.

To respond to your inquiries, feedback, or customer support requests.

To send promotional emails, offers, updates, or newsletters if you have opted in.

To analyze website usage, improve our services, and enhance user experience.

To comply with legal obligations and protect our rights or the rights of others.

3. Information Sharing and Disclosure

We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who help us operate our website, process payments, deliver products, or send communications. These third parties are obligated to maintain the confidentiality of your information.

We may also disclose your information:

When required by law, regulation, or legal process.

To enforce our policies, protect our property, or ensure the safety of users.

In connection with a business transfer, merger, or acquisition.

4. Cookies and Tracking Technologies

Our website uses cookies and similar tracking technologies to improve your experience. Cookies help us understand user preferences, analyze website traffic, and provide personalized content. You can manage or disable cookies in your browser settings, but some features of the website may not function properly without them.

5. Data Security

We take reasonable administrative, technical, and physical measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.

6. Your Rights

Depending on your location, you may have rights regarding your personal information, including:

Accessing and obtaining a copy of your personal data.

Requesting corrections or updates to your information.

Requesting deletion of your personal data.

Opting out of marketing communications.

To exercise any of these rights, you may contact us using the details below.

7. Third-Party Links

Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external websites. We encourage you to review the privacy policies of any third-party websites you visit.

8. Children’s Privacy

Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children. If we learn that we have collected information from a child without parental consent, we will take steps to delete such information promptly.

9. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or business operations. The updated policy will be posted on this page with the revised “Effective Date.” We encourage you to review this page periodically for the latest information.

10. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:

Balaji Masala
Email: support@balajimasala.com

Phone: +91-XXXXXXXXXX
            Address: 123, Spice Lane, City, State, India</p>

        </div>

      </div>

    </div>
    </>
  )
}

export default PrivacyPolicy