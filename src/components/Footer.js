import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-10 w-full">

      <div className="flex justify-between ">        
      <h1 className="text-white text-3xl font-bold ml-40">accredian</h1>
      <button className="bg-blue-500 outline text-white py-2 px-4 rounded mr-40 hover:bg-blue-600 w-1/6">
          Schedule 1-on-1 call now
        </button>
      </div>
      {/* Second line of text */}
      <div className="flex justify-between mb-5">
      <p className="text-white text-sm ml-40 mb-4">credentials that matter</p>
        <p className="text-right mr-44 mb-4">Speak with our learning advisor</p>
      </div>
      
      {/* White line centered with precise width */}
      <div className="text-center">
        <hr className="border-t border-white w-10 mx-auto mb-6 " style={{ width: '80%' }} />
      </div>


      <div className="flex justify-center gap-4 mb-8">
        <div className="w-80  text-slate-200 ml-40">
          <p className="text-white text-xl mb-2">Programs</p>
          
            <div className="flex justify-between font-bold">
            <p className="text-white mb-6 ">Data Science & AI</p>
            <p className="text-right mb-6 mr-8">+</p>
            </div>
            
            <div className="flex justify-between font-bold">
            <p className="text-white mb-6">Product management</p>
            <p className="text-right mb-6 mr-8">+</p>
            </div>

            
            <div className="flex justify-between font-bold">
            <p className="text-white mb-6">Business Analytics</p>
            <p className="text-right mb-6 mr-8">+</p>
            </div>

            <div className="flex justify-between font-bold">
            <p className="text-white mb-6">Digital transformation</p>
            <p className="text-right mb-6 mr-8">+</p>
            </div>
            
            <div className="flex justify-between font-bold">
            <p className="text-white mb-6">Business Management</p>
            <p className="text-right mb-6 mr-8">+</p>
            </div>
            
            <div className="flex justify-between font-bold">
            <p className="text-white mb-6">Project Management</p>
            <p className="text-right mb-6 mr-8">+</p>
            </div>
            
            <div className="flex justify-between font-bold">
            <p className="text-white mb-6">Startegy & Leadership</p>
            <p className="text-right mb-6 mr-8">+</p>
            </div>
            
            <div className="flex justify-between font-bold">
            <p className="text-white mb-6">Senior Management</p>
            <p className="text-right mb-6 mr-8">+</p>
            </div>
            
            <div className="flex justify-between font-bold">
            <p className="text-white mb-6">Fintech</p>
            <p className="text-right mb-6 mr-8">+</p>
            </div>
            
        </div>



        <div className="grow  text-slate-200 text-left">
          <p className="text-white text-xl mb-2">Contact US</p>

          <p className=''>Email us (For Data Science Queries): admissions@accredian.com</p>
          <p className=''>Email us (For Product Management Queries):pm@accredian.com</p>
          <p className=''>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM) </p>
          <p className=''>Product Management Admission Helpline:+91 9625811095</p>
          <p className=''>Enrolled Student Helpline: +91 7969322507</p>
          <p className=''>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,</p>
          <p className='mb-2'> Haryana 122015</p>
          <p className="text-white text-xl mb-2">Why Accredian</p>
          <p className="text-white text-xl mb-2">Follow US</p>
          {/* Social Media Icons */}
      <div className="flex justify-left gap-8">
        <a href="#" className="text-white text-xl hover:text-gray-500">
          <FaFacebook />
        </a>
        <a href="#" className="text-white text-xl hover:text-gray-500">
          <FaLinkedin />
        </a>
        <a href="#" className="text-white text-xl hover:text-gray-500">
          <FaTwitter />
        </a>
        <a href="#" className="text-white text-xl hover:text-gray-500">
          <FaInstagram />
        </a>
        <a href="#" className="text-white text-xl hover:text-gray-500">
          <FaYoutube />
        </a>
      </div>


        </div>
        <div className="w-80  text-left text-slate-200 mr-40">
          <p className="text-white text-xl mb-2">Accredian</p>

          

<p>Accredian</p>
<p>About</p>
<p>Career</p>
<p>Blog</p>
<p>Admission Policy</p>
<p>Referral Policy</p>
<p>Privacy Policy</p>
<p>Terms Of Service</p>
<p>Master FAQs</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-white">© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
