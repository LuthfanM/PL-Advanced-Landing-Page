import React, { useState } from 'react';

const Slider = () => {
  const [value, setValue] = useState(3);  // Default value
  const labels = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

  return (
    <div className="space-y-3 text-white">
      <div className="flex justify-between">
        {labels.map((label, index) => (
          <span key={index} className={`${index === value ? 'text-blue-500' : ''}`}>{label}</span>
        ))}
      </div>
      <input
        type="range"
        min="0"
        max="10"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-700 appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
};

export default Slider;
