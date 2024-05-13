import CompletedForm from "@/components/Form/CompletedForm";
import FirstForm from "@/components/Form/FirstForm";
import SecondForm from "@/components/Form/SecondForm";
import ThirdForm from "@/components/Form/ThirdForm";
import { DEFAULT_SURFING_EXP } from "@/constants";
import * as Yup from "yup";

interface FormsProps {
  [key: string]: any;
}

const dateFormat = /^(\d{2})\/(\d{2})\/(\d{4})$/;

export const FormList = [
  {
    name: "Visitor Details",
    component: <FirstForm />,
    initialValues: {
      name: "",
      country: "",
      email: "",
      whatsappNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      whatsappNumber: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
    }),
  },
  {
    name: "Surfing Experiences",
    component: <SecondForm />,
    initialValues: {
      surfingName: "",
      desiredBoard: "",
      surfingExperience: DEFAULT_SURFING_EXP,
    },
    validationSchema: Yup.object().shape({
      surfingName: Yup.string()
      .required("Required")
      .matches(dateFormat, 'Must be in Format DD/MM/YYYY')
      .test(
        'is-valid-date',
        'Invalid date',
        (value) => {
          if (!value) return false;
          const parts = value.split('/');
          const day = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10) - 1;
          const year = parseInt(parts[2], 10);
          const date = new Date(year, month, day);
          return date && date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
        }
      ),
      desiredBoard: Yup.string().required("Required"),
      surfingExperience: Yup.number().min(0).max(10),
    }),
  },
  {
    name: "ID Verification",
    component: <ThirdForm />,
    initialValues: {
      identityFile: null,
    },
    validationSchema: Yup.object({
      identityFile: Yup.mixed()
        .required("Required")
        .test(
          "fileSize",
          "File too large",
          (value) => value instanceof File && value.size <= 2097152 // 2MB
        ),
    }),
  },
  {
    name: "You're In!",
    component: <CompletedForm />,
  },
];
