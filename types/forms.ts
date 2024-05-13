interface FirstFormValues {
  name: string;
  country: string;
  email: string;
  whatsappNumber: string;
}

interface SecondFormValues {
  surfingName: string;
  desiredBoard: string;
  surfingExperience: string;
}
interface ThirdFormValues {
  identityFile?: File;
}

export type { FirstFormValues, SecondFormValues, ThirdFormValues };
