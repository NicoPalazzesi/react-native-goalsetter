import { useState } from "react";

export const useValidatePassword = () => {
  const [invalidPassword, setInvalidPassword] = useState<boolean | undefined>();

  const validatePassword = (password: string) => {
    setInvalidPassword(password.length === 0 ? undefined : password.length < 4);
  };

  return {invalidPassword, validatePassword};
};
