import React from 'react';
import { useState } from 'react';
import abc from "./abc.png";
import PopupModal from './Popup';

function MainSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="bg-white mb-32">

    <div className="flex">
      <p className="font-bold text-2xl text-blue-500 mt-4 ml-64">accredian</p>
      <button className="bg-blue-600 text-white py-2 mt-4 px-4 rounded-lg ml-4">courses </button>
      
      <p className="  text-left text-gray-700 mr-4 mt-4 ml-56">Refer & Earn</p>
      <p className="  text-left text-gray-700 ml-8 mt-4">Resources</p>
      <p className=" text-left text-gray-700 mr-4 ml-8 mt-4">About US</p>

      <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg px-6 ml-8 mt-4">Login</button>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg px-8 ml-4 mt-4">Try for free</button>
      
      </div>

     <p className='ml-64 text-gray-600 text-sm'>credentials that matter</p>
     
        


      {/*Navbar*/}
      <nav className="bg-blue-100 rounded-full p-3 mx-auto mt-10 shadow-xl " style={{width:"40%"}}>
      <div className="flex justify-between items-center">
       
        <div className="flex  gap-20 space-x-4 text-xl">
          <a href="#refer" className="text-gray-600 hover:text-blue-500 ml-12">Refer</a>
          <a href="#benefits" className="text-gray-600 hover:text-blue-500">Benefits</a>
          <a href="#faq" className="text-gray-600 hover:text-blue-500">FAQ</a>
          <a href="#support" className="text-gray-600 hover:text-blue-500">Support</a>
        </div>
      </div>
    </nav>




    {/* Box */}
    <div className="flex justify-center items-start mt-8">
        <div className="bg-blue-100 shadow-2xl rounded-xl text-left relative overflow-hidden" style={{ width: '65%', height: '550px' }}>
          {/* Content inside the big box */}
          <h1 className="font-bold text-7xl mb-4 ml-8 mt-16 text-left">Let's Learn</h1>
          <h1 className="font-bold text-7xl mb-4 ml-8 text-left">& Earn</h1>
          <p className="text-3xl mt-10 ml-8 text-left text-gray-700">Get a chance to win</p>
          <div className="flex">
            <p className="text-3xl text-left text-gray-700 mr-4 ml-8">up-to</p>
            <p className="text-5xl text-left text-blue-600 font-bold">Rs. 15,000</p>
          </div>
          <button className="bg-blue-700 text-white py-2 px-4 rounded mt-10 w-40 ml-8" onClick={openModal}>Refer Now</button>
          <img src={abc} alt="Descriptive Alt Text" className="absolute bottom-0 right-0 h-full object-cover" />
              {isModalOpen && (
        <PopupModal onClose={closeModal} />
      )}
        </div>
      </div>
        
      
    </section>
  );
}

export default MainSection;
