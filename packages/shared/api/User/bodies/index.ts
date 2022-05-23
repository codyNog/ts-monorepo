import { User, userSchema } from "../../../entities/User";

export type CreateUserBody = User;
export const createUserBodySchema = userSchema;

export type UpdateUserBody = User;
export const updateUserBodySchema = userSchema;
