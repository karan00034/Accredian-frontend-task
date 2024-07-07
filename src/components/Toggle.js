import { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="hidden"
        id="toggle"
        checked={isChecked}
        onChange={toggleSwitch}
      />
      <label
        htmlFor="toggle"
        className={`flex items-center w-12 h-6 bg-gray-300 rounded-full p-1 cursor-pointer ${
          isChecked ? 'bg-blue-500' : ''
        }`}
      >
        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${isChecked ? 'translate-x-6' : ''}`} />
      </label>
      <span className="ml-2">{isChecked ? 'Enrolled' : 'Not enrolled'}</span>
    </div>
  );
};

export default ToggleSwitch;
