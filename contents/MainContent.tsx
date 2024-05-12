"use client";
import FirstForm from "@/components/Form/FirstForm";
import SecondForm from "@/components/Form/SecondForm";
import ThirdForm from "@/components/Form/ThirdForm";
import SupportingImage from "@/components/Image/SupportingImage";
import { FormSubtitle } from "@/constants";
import React, { useState } from "react";

const MainContent = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, 3));
  const previousStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const formSwitcher = () => {
    switch (step) {
      case 1:
        return <FirstForm />;
      case 2:
        return <SecondForm />;
      case 3:
        return <ThirdForm />;
    }
  };

  return (
    <div className="content overflow-auto flex justify-center items-center z-10 relative">     
      <div className="bg-secondary rounded-lg shadow-lg w-full flex flex-row max-w-[70%] overflow-hidden inside-stroke">
        <div className="basis-[45%]">
          <SupportingImage />
        </div>
        <div className="basis-[55%] flex flex-col p-14">
          <div className="flex-grow mb-4 text-white">
            <h1 className="text-[3.125rem] mb-4 leading-none font-bodonimoda">Book Your Visit</h1>
            <h3 className="text-xl mt-4 mb-12 tracking-wide20 align-top">
              {step}/{FormSubtitle.length}: {FormSubtitle[step - 1]}
            </h3>
            {formSwitcher()}
          </div>
          <div className="flex items-end">
            <button
              onClick={nextStep}
              className="inside-stroke self-start w-[30%] p-2 bg-white text-black font-inter font-semibold hover:bg-gray-200"
            >
              {step == FormSubtitle.length ? "Book My Visit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
