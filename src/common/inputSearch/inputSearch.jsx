import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = ({ placeholder }) => {
  return (
    <div className="relative">
      <input
        className="w-full px-4 py-2 pr-10  rounded border border-gray-400"
        type="text"
        placeholder={placeholder}
      />
      <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
        <FaSearch className="text-gray-400" color='gray' />
      </div>
    </div>
  );
};

export default SearchInput;
