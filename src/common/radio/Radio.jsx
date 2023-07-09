import React from 'react';

const Radio = ({ label, name, value, onChange, options }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">{label}</span>
      {options.map(option => (
        <label key={option.value} className="inline-flex items-center mr-4">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
