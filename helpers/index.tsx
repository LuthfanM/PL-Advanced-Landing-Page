import CompletedForm from "@/components/Form/CompletedForm";
import FirstForm from "@/components/Form/FirstForm";
import SecondForm from "@/components/Form/SecondForm";
import ThirdForm from "@/components/Form/ThirdForm";
import * as Yup from 'yup';

interface FormsProps {
  [key: string]: any;
}

export const FormList  = [
  {
    name: "Visitor Details",
    component: <FirstForm />,
    initialValues: {
      name: '',
      country: '',
      email: '',
      whatsappNumber: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      whatsappNumber: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
    })
  },
  {
    name: "Surfing Experiences",
    component: <SecondForm />,
  },
  {
    name: "ID Verification",
    component: <ThirdForm />,
  },
  {
    name: "You're In!",
    component: <CompletedForm />,
  },
];
