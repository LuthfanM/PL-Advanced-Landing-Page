"use client";
import { useFormData } from "@/providers/FormDataProvider";
import React, { useEffect } from "react";

const CompletedForm = () => {
  const { formData } = useFormData();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       window.location.reload();
//     }, 10000);

//     return () => clearTimeout(timer);
//   }, []);

  return (
    <div className="bg-black text-white text-[0.875rem]">
      <p className="mb-6">
        Your store visit is booked and you&apos;re ready to ride the shopping wave.
        Here’s your detail:
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p>
            <strong>Name:</strong> {formData?.name}
          </p>
          <p>
            <strong>Email:</strong> {formData?.email}
          </p>
        </div>
        <div>
          <p>
            <strong>Country:</strong>{" "}
            <span className="text-red-500">{formData?.country}</span>
          </p>
          <p>
            <strong>Visit date:</strong> {formData?.surfingName}
          </p>
        </div>
      </div>

      <p>
        We look forward to seeing you at the #Swellmatch store! Your booking
        details already sent to your email and whatsapp
      </p>   
    </div>
  );
};

export default CompletedForm;
