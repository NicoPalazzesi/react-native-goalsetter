import { useState } from "react";

export const useValidatePassword = () => {
  const [invalidPassword, setInvalidPassword] = useState(false);

  const validatePassword = (password: string) => {
    setInvalidPassword(password !== '' && password.length < 4);
  };

  return {invalidPassword, validatePassword};
};
