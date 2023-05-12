import { useState } from "react";

export const useValidatePassword = (password: string) => {
  const [invalidPassword, setInvalidPassword] = useState<boolean | undefined>();

  const validatePassword = () => {
    setInvalidPassword(password !== '' && password.length < 4);
  };

  return {invalidPassword, validatePassword};
};
