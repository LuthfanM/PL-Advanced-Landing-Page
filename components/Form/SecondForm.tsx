import React from "react";
import Slider from "../Slider/Slider";
import CustomDropdown from "../Dropdown/CustomDropdown";
import { boards } from "@/constants/items";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { SecondFormValues } from "@/types/forms";

const SecondForm = () => {
  const { values, setFieldValue } = useFormikContext<SecondFormValues>();

  return (
    <div className="h-full">
      <div className="mb-6 w-full">
        <label
          htmlFor="surfing-experience-slider"
          className="block mb-2 align-top"
        >
          Your Surfing Experience
        </label>
        <Slider name="surfingExperience" />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Field
            type="text"
            name="surfingName"
            placeholder="Name"
            value={values.surfingName || ""}
            className="w-full p-4 black60 placeholder:text-gray-300"
          />
          <ErrorMessage
            name="surfingName"
            component="div"
            className="error text-red-600"
          />
        </div>
        <div>
          <CustomDropdown
            title="Your Desired Board"
            data={boards}
            value={values.desiredBoard}
            onChange={(value) => setFieldValue("desiredBoard", value)}
          />
          <ErrorMessage name="desiredBoard" component="div" className="error text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default SecondForm;
