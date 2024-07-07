import React, { useState } from 'react';

function FAQ() {
  const [activeTab, setActiveTab] = useState('Eligibility');
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setActiveQuestion(activeQuestion === question ? null : question);
  };

  const tabs = ['Eligibility', 'How To Use?', 'Terms & Conditions'];

  const faqs = {
    'Eligibility': [
      {
        question: 'Do I need to have prior Product Management and Project Management experience to enroll in the program?',
        answer: 'No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.',
      },
      {
        question: 'What is the minimum system configuration required?',
        answer: '',
      },
    ],
    'How To Use?': [],
    'Terms & Conditions': [],
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 ">Frequently Asked <span className="text-blue-600">Questions</span></h1>
      <div className="flex flex-col lg:flex-row items-start justify-center space-x-0 lg:space-x-8 space-y-8 lg:space-y-0">
        <div className="flex flex-col space-y-4 ml-44">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 shadow-xl rounded ${activeTab === tab ? 'bg-blue-100 text-blue-500 font-bold' : 'border text-gray-700'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex-grow">
          {faqs[activeTab].map((faq, index) => (
            <div key={index} className="mb-4 mr-44">
              <button
                onClick={() => toggleQuestion(faq.question)}
                className="text-blue-600 font-semibold text-left w-full"
              >
                {faq.question}
              </button>
              {activeQuestion === faq.question && <p className="mt-2 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>



      {/* Call to action */}
      <div className="bg-blue-600 text-white py-10 mt-10 rounded-lg flex justify-between items-center px-10 ml-44 mr-44">
      <div className="flex items-center">
        <div className="bg-white rounded-full p-4 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 11-12.728 12.728A9 9 0 0118.364 5.636z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7.172a4 4 0 01-5.656 5.656M8.828 8.828a4 4 0 015.656-5.656" />
          </svg>
        </div>
        <div>
        <p className="text-3xl ">Want to delve deeper into the program? </p>
        <p>Share your details to receive expert insights from our program team!</p>
      </div>
      </div>
      <button className="bg-white text-blue-600 py-2 px-4 rounded font-bold">Get in touch</button>
    </div>


    </div>
    
  );
}

export default FAQ;
