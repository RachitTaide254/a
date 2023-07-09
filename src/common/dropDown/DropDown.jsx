import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Dropdown = ({ options, selectedOption, onOptionSelect, label, parentClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${parentClass}`}>
      <label className="block text-base text-black">{label}</label>
      <button
        className="inline-flex items-center justify-between w-full px-4 py-2 font-medium text-gray-700 bg-white rounded border border-gray-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption.label}
        <FaAngleDown className="ml-2" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-2">
            {options.map((option) => (
              <li key={option.value} className="px-4 py-2 hover:bg-gray-100">
                <button
                  className="w-full text-left focus:outline-none"
                  onClick={(e) => handleOptionClick(option)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
