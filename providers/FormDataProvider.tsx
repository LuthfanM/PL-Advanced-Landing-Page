import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormDataContextType {
  formData: { [key: string]: any };
  updateFormData: (newData: { [key: string]: any }) => void;
}

const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

export const FormDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const updateFormData = (newData: { [key: string]: any }) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error(
      "useFormData hooks must be used within a FormDataProvider context"
    );
  }
  return context;
};
