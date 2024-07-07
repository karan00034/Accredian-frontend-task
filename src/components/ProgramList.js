import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

function ProgramList() {
  const programs = [
    'Product Management',
    'Strategy & Leadership',
    'Business Management',
    'Fintech',
    'Senior Management',
    'Data Science',
    'Digital Transformation',
    'Business Analytics'
  ];

  return (
    <div className="w-64 bg-white shadow-lg rounded-lg">
      <div className="bg-blue-600 text-white font-bold p-4 rounded-t-lg">
        ALL PROGRAMS
      </div>
      <ul className="divide-y divide-gray-200">
        {programs.map((program, index) => (
          <li key={index} className="flex justify-between items-center p-4 hover:bg-gray-100">
            <span>{program}</span>
            <FaChevronRight />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgramList;
