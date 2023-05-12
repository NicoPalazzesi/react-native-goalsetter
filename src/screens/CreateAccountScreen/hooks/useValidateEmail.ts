import { useState } from "react";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

export const useValidateEmail = () => {
  const [invalidEmail, setInvalidEmail] = useState(false);

  const validateEmail = (email: string) => {
    setInvalidEmail(email !== '' && !EMAIL_REGEX.test(email));
  };

  return {invalidEmail, validateEmail};
};
