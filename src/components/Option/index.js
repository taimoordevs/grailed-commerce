// Dropdown.js

import React, { useState } from 'react';

const Option = ({ options, label }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold text-gray-700">{label}</label>
      <select
        className="mt-1 p-2 border rounded-md w-full"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Option;