import { useState } from "react"
import { Account } from "../model/interface";
import Services from "../../../services";

export const useAddParent = () => {
  const [loading, setLoading] = useState(false);

  const addParent = async (account: Account) => {
    setLoading(true);
    try{
      await Services.addParent(account);
    } catch {
    } finally {
      setLoading(false);
    };
  };

  return {loading, addParent};
};
