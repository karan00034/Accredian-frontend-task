import React from 'react';
import ProgramList from './ProgramList'; // Make sure the path is correct
import { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import ToggleSwitch from "./Toggle"

function ReferralBenefits() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center">What Are The Referral Benefits?</h2>
        <div className="flex flex-col items-end justify-center px-8">
    <ToggleSwitch />
    {/* Other components */}
  </div>
        {/* Flex container to align ProgramList and table side by side */}
        <div className="flex justify-center items-start mt-6 space-x-8">
          <ProgramList />
          
          <table className="table-auto shadow-xl">
            <thead>
              <tr>
                <th className="border-r px-4 py-2 bg-blue-200 text-blue-700">Programs</th>
                <th className="border-r px-4 py-2 bg-blue-200 text-blue-700">Referrer Bonus</th>
                <th className="border-r px-4 py-2 bg-blue-200 text-blue-700">Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r px-4 py-2 flex items-center"><FaGraduationCap className='mr-2 text-blue-500 text-2xl'/>Professional Certificate Program in Product Management</td>
                <td className="border-r px-4 py-2">₹7,000</td>
                <td className="border-r px-4 py-2">₹9,000</td>
              </tr>
              <tr>
                <td className="border-r px-4 py-2 flex items-center"><FaGraduationCap className='mr-2 text-blue-500 text-2xl'/>Professional Certificate Program in Product Management</td>
                <td className="border-r px-4 py-2">₹7,000</td>
                <td className="border-r px-4 py-2">₹9,000</td>
              </tr>
              <tr>
                <td className="border-r px-4 py-2 flex items-center"><FaGraduationCap className='mr-2 text-blue-500 text-2xl'/>Professional Certificate Program in Product Management</td>
                <td className="border-r px-4 py-2">₹7,000</td>
                <td className="border-r px-4 py-2">₹9,000</td>
              </tr>
              <tr>
                <td className="border-r px-4 py-2 flex items-center"><FaGraduationCap className='mr-2 text-blue-500 text-2xl'/>Professional Certificate Program in Product Management</td>
                <td className="border-r px-4 py-2">₹7,000</td>
                <td className="border-r px-4 py-2">₹9,000</td>
              </tr>
              <tr>
                <td className="border-r px-4 py-2 flex items-center"><FaGraduationCap className='mr-2 text-blue-500 text-2xl'/>Professional Certificate Program in Product Management</td>
                <td className="border-r px-4 py-2">₹7,000</td>
                <td className="border-r px-4 py-2">₹9,000</td>
              </tr>
              <tr>
                <td className="border-r px-4 py-2 flex items-center"><FaGraduationCap className='mr-2 text-blue-500 text-2xl'/>Professional Certificate Program in Product Management</td>
                <td className="border-r px-4 py-2">₹7,000</td>
                <td className="border-r px-4 py-2">₹9,000</td>
              </tr>
              <tr>
                <td className="border-r px-4 py-2 flex items-center"><FaGraduationCap className='mr-2 text-blue-500 text-2xl'/>Professional Certificate Program in Product Management</td>
                <td className="border-r px-4 py-2">₹7,000</td>
                <td className="border-r px-4 py-2">₹9,000</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>


        {/* show more component*/}
        <div className=" text-left float-right mr-52">
        <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          Show More
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06-.02l3.72 3.74 3.72-3.74a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 3</a>
            {/* Add more options as needed */}
          </div>
        </div>
      )}
    </div>

    <div className="flex justify-center items-center">
  <button className="bg-blue-500 text-white py-2 px-8 rounded mt-4 ml-72">Refer Now</button>
</div>
      </div>
    </section>
  );
}

export default ReferralBenefits;
