import { CreateUserBody, UpdateUserBody } from "../../../../api/User/bodies";
import {
	DeleteUserParameter,
	GetUserParameter,
	UpdateUserParameter,
} from "../../../../api/User/parameters";
import { User } from "../../../../entities/User";
import { GetUsersQuery } from "../../../../api/User/queries";

export type GetUsersParameter = GetUsersQuery;

type Create = { body: CreateUserBody };

const create = (user: User): Create => {
	const body: CreateUserBody = user;
	return { body };
};

type Get = { param: GetUserParameter };

const get = (uid: string): Get => {
	const param: GetUserParameter = { uid };
	return { param };
};

type GetMany = { query: GetUsersQuery | undefined };

const getMany = (param?: GetUsersParameter): GetMany => {
	const query: GetUsersQuery | undefined = param;
	return { query };
};

type Update = { param: UpdateUserParameter; body: UpdateUserBody };

const update = (user: User): Update => {
	const param: UpdateUserParameter = { uid: user.uid };
	const body: UpdateUserBody = user;

	return { param, body };
};

type Delete = { param: DeleteUserParameter };

const deleteUser = (uid: string): Delete => {
	const param: DeleteUserParameter = { uid };

	return { param };
};

export const userImplModules = {
	create,
	get,
	getMany,
	update,
	delete: deleteUser,
};
