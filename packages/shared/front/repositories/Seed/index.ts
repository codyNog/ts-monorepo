import { v1Client } from "../../libs/aspida";

const create = async (): Promise<void> => {
  return await v1Client.seeds.$post();
};

export const SeedImpl = {
  create,
};
