import { useState } from "react";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

export const useValidateEmail = (email: string) => {
  const [invalidEmail, setInvalidEmail] = useState<boolean | undefined>();

  const validateEmail = () => {
    setInvalidEmail(email !== '' && !EMAIL_REGEX.test(email));
  };

  return {invalidEmail, validateEmail};
};
