import { categoryImplModules } from "~/domain/repositories/Category/modules";
import { Category } from "@my/shared/entities/Category";
import { prisma } from "~/libs/prisma";
import { GetCategoriesQuery } from "@my/shared/api/Category/queries";

const { createData, updateData } = categoryImplModules;

const create = async (category: Category): Promise<Category> => {
	const data = createData(category);
	return await prisma.category.create({ data });
};

const getMany = async (param: GetCategoriesQuery): Promise<Category[]> => {
	return await prisma.category.findMany({
		where: { name: { contains: param.name } },
	});
};

const get = async (uid: string): Promise<Category> => {
	const category = await prisma.category.findUnique({ where: { uid } });
	if (!category) {
		throw 404;
	}
	return category;
};

const update = async (category: Category): Promise<Category> => {
	const data = updateData(category);

	return await prisma.category.update({ where: { uid: category.uid }, data });
};

const deleteCategory = async (uid: string): Promise<void> => {
	await prisma.category.delete({ where: { uid } });
};

export const CategoryImpl = {
	create,
	getMany,
	get,
	update,
	delete: deleteCategory,
};
