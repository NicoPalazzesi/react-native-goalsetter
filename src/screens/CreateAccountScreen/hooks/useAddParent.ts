import { useState } from "react"
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Account } from "../model/interface";
import Services from "../../../services";
import { AppStackParamsList } from "../../../App";

export const useAddParent = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<
    NativeStackNavigationProp<AppStackParamsList, 'CreateAccountScreen'>
  >();

  const addParent = async (account: Account) => {
    setLoading(true);
    try{
      await Services.addParent(account);
      navigation.replace('LinkYourBankScreen');
    } catch {
    } finally {
      setLoading(false);
    };
  };

  return {loading, addParent};
};
