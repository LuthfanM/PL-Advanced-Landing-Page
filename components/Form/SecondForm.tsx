import React from "react";
import Slider from "../Slider/Slider";
import CustomDropdown from "../Dropdown/CustomDropdown";
import { boards } from "@/constants/items";

const SecondForm = () => {
  return (
    <div className="h-full">
      <div className="mb-6 w-full">
        <label
          htmlFor="surfing-experience-slider"
          className="block mb-2 align-top"
        >
          Your Surfing Experience
        </label>
        <Slider />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 black60 placeholder:text-gray-300"
        />
       <CustomDropdown title="Your Desired Board" data={boards} />
      </div>
    </div>
  );
};

export default SecondForm;
