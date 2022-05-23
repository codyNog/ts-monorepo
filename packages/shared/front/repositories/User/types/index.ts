import { GetUsersQuery } from "../../../../api/User/queries";

export type GetUsersParameter = GetUsersQuery;

export type LoginParmeter = {
  name: string;
  password: string;
};
