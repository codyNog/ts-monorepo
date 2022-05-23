import { User } from "../../../entities/User";
import { v1Client } from "../../libs/aspida";
import { userImplModules } from "./modules";
import { GetUsersParameter } from "./types";

const create = async (user: User): Promise<User> => {
  const { body } = userImplModules.create(user);
  return await v1Client.users.$post({ body });
};

const getMany = async (param?: GetUsersParameter): Promise<User[]> => {
  const { query } = userImplModules.getMany(param);
  return await v1Client.users.$get({ query });
};

const get = async (uid: string): Promise<User> => {
  const { param } = userImplModules.get(uid);
  return await v1Client.users._uid(param.uid).$get();
};

const update = async (user: User): Promise<User> => {
  const { param, body } = userImplModules.update(user);
  return await v1Client.users._uid(param.uid).$put({ body });
};

const deleteUser = async (uid: string): Promise<void> => {
  const { param } = userImplModules.delete(uid);
  await v1Client.users._uid(param.uid).$delete();
};

export const UserImpl = { create, getMany, get, update, delete: deleteUser };
