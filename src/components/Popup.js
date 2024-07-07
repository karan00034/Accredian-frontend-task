import { useState } from 'react';
import axios from 'axios';

const PopupModal = ({ onClose }) => {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [referrerPhone, setReferrerPhone] = useState('');
  const [referrerCompany, setReferrerCompany] = useState('');
  const [referrerRelationship, setReferrerRelationship] = useState('');

  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [refereePhone, setRefereePhone] = useState('');
  const [refereeCompany, setRefereeCompany] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const referralData = {
      referrerName,
      referrerEmail,
      referrerPhoneNumber: referrerPhone,
      referrerCompany,
      relationshipWithReferee: referrerRelationship,
      refereeName,
      refereeEmail,
      refereePhoneNumber: refereePhone,
      refereeCompany,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/referral', referralData);
      console.log('Referral data submitted:', response.data);
      onClose(); // Close the modal after submission
    } catch (error) {
      console.error('Error submitting referral data:', error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Referral Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Referrer Details */}
          <div className="mb-4">
            <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700">Referrer Name</label>
            <input type="text" id="referrerName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={referrerName} onChange={(e) => setReferrerName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700">Referrer Email</label>
            <input type="email" id="referrerEmail" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={referrerEmail} onChange={(e) => setReferrerEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="referrerPhone" className="block text-sm font-medium text-gray-700">Referrer Phone Number</label>
            <input type="text" id="referrerPhone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={referrerPhone} onChange={(e) => setReferrerPhone(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="referrerCompany" className="block text-sm font-medium text-gray-700">Referrer Company</label>
            <input type="text" id="referrerCompany" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={referrerCompany} onChange={(e) => setReferrerCompany(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="referrerRelationship" className="block text-sm font-medium text-gray-700">Relationship with Referee</label>
            <input type="text" id="referrerRelationship" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={referrerRelationship} onChange={(e) => setReferrerRelationship(e.target.value)} />
          </div>

          {/* Referee Details */}
          <div className="mb-4">
            <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700">Referee Name</label>
            <input type="text" id="refereeName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={refereeName} onChange={(e) => setRefereeName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700">Referee Email</label>
            <input type="email" id="refereeEmail" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={refereeEmail} onChange={(e) => setRefereeEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="refereePhone" className="block text-sm font-medium text-gray-700">Referee Phone Number</label>
            <input type="text" id="refereePhone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={refereePhone} onChange={(e) => setRefereePhone(e.target.value)} />
          </div>
          <div className="mb-4">
            <label htmlFor="refereeCompany" className="block text-sm font-medium text-gray-700">Referee Company</label>
            <input type="text" id="refereeCompany" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" value={refereeCompany} onChange={(e) => setRefereeCompany(e.target.value)} />
          </div>

          <div className="mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
