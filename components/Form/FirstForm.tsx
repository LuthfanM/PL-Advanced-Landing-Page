import React, { useState } from "react";
import CustomDropdown from "../Dropdown/CustomDropdown";
import { countries } from "@/constants/items";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import { FirstFormValues } from "@/types/forms";

const FirstForm = () => {
  const { values, setFieldValue } = useFormikContext<FirstFormValues>();

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-4 black60 placeholder:text-gray-300"
        />
        <ErrorMessage name="name" component="div" className="error" />
      </div>
      <div>
        <CustomDropdown
          title="Country"
          data={countries}
          label="label"
          value={values.country}
          onChange={(value) => setFieldValue("country", value)}
        />
        <ErrorMessage name="country" component="div" className="error" />
      </div>
      <div>
        <Field
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-4 black60 placeholder:text-gray-300"
        />
        <ErrorMessage name="email" component="div" className="error" />
      </div>
      <div>
        <Field
          type="text"
          name="whatsappNumber"
          placeholder="Whatsapp number"
          className="w-full p-4 black60 placeholder:text-gray-300"
        />
        <ErrorMessage name="whatsappNumber" component="div" className="error" />
      </div>
    </div>
  );
};

export default FirstForm;
