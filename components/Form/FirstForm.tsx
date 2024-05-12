import React, { useState } from "react";

const FirstForm = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full p-4 py-[18px] border border-gray-300"
      />
      <select className="w-full p-4 py-[18px] border border-gray-300">
        <option>Country</option>
        <option>USA</option>
        <option>Canada</option>
      </select>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-4 py-[18px] border border-gray-300"
      />
      <input
        type="text"
        placeholder="Whatsapp number"
        className="w-full p-4 py-[18px] border border-gray-300"
      />
    </div>
  );
};

export default FirstForm;
