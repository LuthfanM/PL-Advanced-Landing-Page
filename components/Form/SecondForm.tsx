import React from "react";
import Slider from "../Slider/Slider";

const SecondForm = () => {
  return (
    <div>
      <div className="mb-6 w-full">
        <label htmlFor="surfing-experience-slider" className="block mb-2 align-top">
          Your Surfing Experience
        </label>
        <Slider />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Visit Date"
          className="w-full px-4 py-[18px] border border-gray-300 rounded"
        />
        <select className="w-full px-4 py-[18px] border border-gray-300 rounded">
          <option>Country</option>
          <option>USA</option>
          <option>Canada</option>
        </select>
      </div>
    </div>
  );
};

export default SecondForm;
