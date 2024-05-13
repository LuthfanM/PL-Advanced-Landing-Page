import React, { useState } from "react";
import { Items } from "@/types/items";

interface CustomDropdownType {
  title: string;
  data: Items[];
  label?: string;
  value: string;
  onChange: (value: string) => void;
};

const CustomDropdown: React.FC<CustomDropdownType> = ({
  title,
  data,
  label,
  value,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredItems: Items[] = searchTerm.length === 0
    ? data
    : data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSelection = (item: Items) => {
    onChange(item.name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="black60 text-white w-full text-left p-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute bg-white  black60 text-white w-full mt-1 py-4 px-6 z-10 overflow-y-scroll max-h-60">
          {label && (
            <input
              type="text"
              className="w-full px-4 black60-30 py-2 placeholder:text-gray-300"
              placeholder={`Label`}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center pt-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleSelection(item)}
            >
              {item.key && <span className="mr-2">{item.key}</span>}
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
