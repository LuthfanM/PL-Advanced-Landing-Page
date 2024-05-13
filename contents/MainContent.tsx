"use client";
import SupportingImage from "@/components/Image/SupportingImage";
import FormikWrapper from "@/components/Validator/FormikWrapper";
import { createSurfer } from "@/handlers/services/Surfer";
import { FormList } from "@/helpers";
import { dateFormatter } from "@/helpers/functions";
import { useFormData } from "@/providers/FormDataProvider";
import React, { useEffect, useState } from "react";

const MainContent = () => {
  const [step, setStep] = useState<number>(1);
  const { formData, updateFormData } = useFormData();

  const nextStep = () =>
    setStep((prevStep) => Math.min(prevStep + 1, FormList.length));
  const previousStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const subheadingGenerator = () => {
    return step === FormList.length
      ? `${FormList[step - 1].name}`
      : `${step}/${FormList.length}: ${FormList[step - 1].name}`;
  };

  const [CurrentFormComponent, setCurrentForm] = useState(
    () => FormList[step - 1].component
  );
  const [formInitialValues, setInitialValues] = useState(
    () => FormList[step - 1].initialValues
  );
  const [formValidationSchema, setValidationSchema] = useState(
    () => FormList[step - 1].validationSchema
  );

  useEffect(() => {
    setCurrentForm(FormList[step - 1].component);
    setInitialValues(FormList[step - 1].initialValues);
    setValidationSchema(FormList[step - 1].validationSchema);
  }, [step]);

  const handleFormSubmit = (values: any) => {
    console.log("Form Submitted:", values);
    updateFormData(values);
    if (step < FormList.length) {
      nextStep();
    }

    if (step === FormList.length - 1) {
      console.log("jhalo[sa", formData);
      const payload = {
        name: formData?.name,
        country: formData?.country,
        email: formData?.email,
        phone_number: formData?.whatsappNumber,
        id_card: values?.identityFile,
        visit_date: dateFormatter(formData?.surfingName),
        experience: formData?.surfingExperience,
        desired_board: formData?.desiredBoard,
      };
      createSurfer(payload);
    }
  };

  console.log("---", formData);

  return (
    <div className="content overflow-auto flex justify-center items-center z-10 relative">
      <div className="bg-secondary overflow-visible rounded-lg shadow-lg w-full flex flex-row max-w-[70%] inside-stroke">
        <div className="basis-[45%]">
          <SupportingImage />
        </div>
        <div className="basis-[55%] flex flex-col p-14">
          <FormikWrapper
            initialValues={formInitialValues}
            validationSchema={formValidationSchema}
            onSubmit={handleFormSubmit}
          >
            <div className="flex-grow mb-4 text-white">
              <h1 className="text-[3.125rem] mb-4 leading-none font-bodonimoda">
                {step === FormList.length
                  ? `Thank you, ${formData?.name?.split(" ")[0]}`
                  : "Book My Visit"}
              </h1>
              <h3 className="text-[1rem] mt-4 mb-12 tracking-wide20 align-top">
                {subheadingGenerator()}
              </h3>
              {CurrentFormComponent}
            </div>
            <div className="flex items-end">
              {step !== FormList.length ? (
                <button
                  type="submit"
                  // onClick={nextStep}
                  className="inside-stroke self-start w-[30%] p-2 bg-white text-black font-inter font-semibold hover:bg-gray-200"
                >
                  {step == FormList.length - 1 ? "Book My Visit" : "Next"}
                </button>
              ) : (
                <p className="text-[0.6rem] mt-10 text-white white60-60">
                  This form will refresh automatically in 10 seconds
                </p>
              )}
            </div>
          </FormikWrapper>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
