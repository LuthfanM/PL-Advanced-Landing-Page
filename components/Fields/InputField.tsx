import React, { useState } from 'react';

const InputField = () => {
  const [name, setName] = useState('');

  return (
    <div className="flex items-center bg-gray-800 text-white p-2">
      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mr-3">
        Name
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="bg-gray-800 outline-none text-white placeholder-gray-400 flex-1"
      />
      {name && (
        <button
          onClick={() => setName('')}
          className="text-gray-400 hover:text-gray-200"
        >
          ✖
        </button>
      )}
    </div>
  );
};

export default InputField;
