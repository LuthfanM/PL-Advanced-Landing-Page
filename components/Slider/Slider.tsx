"use client";
import React, { useEffect } from "react";
import { useField } from "formik";
import { DEFAULT_SURFING_EXP } from "@/constants";

const Slider = ({ name }: { name: string }) => {
  const [field, meta, helpers] = useField(name);

  const labels = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];
  const value = field.value ?? DEFAULT_SURFING_EXP; //default if untouched

  useEffect(() => {
    helpers.setValue(field.value ?? DEFAULT_SURFING_EXP);
  }, []);

  return (
    <div className="space-y-3 text-white">
      <div className="flex flex-row justify-between items-center">
        {labels.map((label, index) => (
          <span
            key={index}
            className={`${index === parseInt(value) ? "text-[1.25rem]" : ""}`}
          >
            {label}
          </span>
        ))}
      </div>
      <input
        type="range"
        min="0"
        max="10"
        {...field}
        value={value}
        onChange={(e) => helpers.setValue(parseInt(e.target.value))}
        className="w-full h-2 input-range-slider appearance-none cursor-pointer"
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Slider;
