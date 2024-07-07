import React from 'react';
import { useState } from 'react';
import { FaUserPlus, FaRegEdit, FaWallet } from "react-icons/fa";
import PopupModal from './Popup';

function HowToRefer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="bg-blue-50 py-10">
      <div className="container mx-auto text-center">
        <div className='flex justify-center'>
          <div className='text-center'>
            <h2 className="text-2xl font-bold">How Do I</h2>
            <p className='font-bold text-blue-500 text-2xl'>Refer?</p>
          </div>
        </div>
        <div className="flex justify-center mt-10 space-x-10">
          <div className="max-w-xs text-center">
            <div className="bg-blue-100 p-4 rounded-full flex flex-col justify-center items-center shadow-2xl mr-10" style={{ width: "280px", height: "280px" }}>
              <FaUserPlus className='text-blue-500 text-6xl mb-4' />
              <p className="text-gray-700 px-4">Submit referrals easily via website’s referral section.</p>
            </div>
          </div>
          <div className="max-w-xs text-center ">
            <div className="bg-blue-100 p-4 rounded-full flex flex-col justify-center items-center shadow-2xl mr-10" style={{ width: "280px", height: "280px" }}>
              <FaRegEdit className='text-blue-500 text-6xl mb-4' />
              <p className="text-gray-700 px-4">Earn rewards once your referral joins an Accredian program.</p>
            </div>
          </div>
          <div className="max-w-xs text-center">
            
            <div className="bg-blue-100 p-4 rounded-full flex flex-col justify-center items-center shadow-2xl" style={{ width: "280px", height: "280px" }}>
              <FaWallet className='text-blue-500 text-6xl mb-4' />
              <p className="text-gray-700 px-4">Both parties receive a bonus 30 days after program enrollment.</p>
            </div>
            
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-24 px-12"  onClick={openModal}>Refer Now</button>
        {isModalOpen && (
        <PopupModal onClose={closeModal} />
      )}
      </div>
    </section>
  );
}

export default HowToRefer;
