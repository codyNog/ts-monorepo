import { User } from "@my/shared/entities/User";
import { GetUsersQuery } from "@my/shared/api/User/queries";
import { prismaIncludeQuery } from "~/constants/prisma";
import { prisma } from "~/libs/prisma";
import { userImplModules } from "~/domain/repositories/User/modules";

const include = prismaIncludeQuery.user;

const create = async (user: User): Promise<User> => {
	const data = userImplModules.createData(user);
	return await prisma.user.create({ data, include });
};

const getMany = async (param: GetUsersQuery): Promise<User[]> => {
	return prisma.user.findMany({
		where: { name: { contains: param.name, mode: "insensitive" } },
		include,
	});
};

const get = async (uid: string): Promise<User> => {
	const user = await prisma.user.findUnique({ where: { uid }, include });
	if (!user) {
		throw 404;
	}
	return user;
};

const update = async (user: User): Promise<User> => {
	const data = userImplModules.updateData(user);
	return prisma.user.update({ where: { uid: user.uid }, data, include });
};

const deleteUser = async (uid: string): Promise<void> => {
	await prisma.user.delete({ where: { uid } });
};

export const UserImpl = { create, getMany, get, update, delete: deleteUser };
