import { Account } from "../screens/CreateAccountScreen/model/interface"

const wait = async (ms: number) => (
  new Promise<void>(resolve => {setTimeout(resolve, ms)})
);

const Services = {
  addParent: async (account: Account) => {
    await wait(2000);
  },
};

export default Services;
