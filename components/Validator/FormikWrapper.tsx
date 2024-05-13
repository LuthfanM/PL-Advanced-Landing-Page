import React, { ReactNode } from "react";
import {
  Formik,
  Form,
  FormikConfig,
  FormikValues,
  FormikHelpers,
} from "formik";

interface FormikWrapperProps<Values extends FormikValues>
  extends FormikConfig<Values> {
  children: ReactNode;
}

function FormikWrapper<Values extends FormikValues>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  validateOnBlur,
  validateOnChange,
}: FormikWrapperProps<Values>) {
  return (
    <Formik<Values>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      enableReinitialize={true}
    >
      {(formik) => <Form>{children}</Form>}
    </Formik>
  );
}

export default FormikWrapper;
