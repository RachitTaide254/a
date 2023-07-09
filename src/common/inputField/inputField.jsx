import React from 'react';

const InputField = ({ name, label, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-base text-black">{label}</label>}
      <input
        name={name}
        className="w-full px-4 py-2 text-black bg-white border border-gray-400 rounded"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default InputField;
