import { Category } from "../../../entities/Category";
import { v1Client } from "../../libs/aspida";
import {
	CreateCategoryBody,
	UpdateCategoryBody,
} from "../../../api/Category/bodies";
import { UpdateCategoryParameter } from "../../../api/Category/parameters";
import { GetCategoriesQuery } from "../../../api/Category/queries";
import { env } from "../../env";

const create = async (category: Category): Promise<Category> => {
	const body: CreateCategoryBody = category;
	return await v1Client.categories.$post({ body });
};

const getMany = async (query?: GetCategoriesQuery): Promise<Category[]> => {
	return await v1Client.categories.$get({ query });
};

const get = async (uid: string): Promise<Category> => {
	return await v1Client.categories._uid(uid).$get();
};

const update = async (category: Category): Promise<Category> => {
	const param: UpdateCategoryParameter = { uid: category.uid };
	const body: UpdateCategoryBody = category;
	return await v1Client.categories._uid(param.uid).$put({ body });
};

const deleteCategory = async (uid: string): Promise<void> => {
	await v1Client.categories._uid(uid).$delete();
};

export const CategoryImpl = {
	create,
	getMany,
	get,
	update,
	delete: deleteCategory,
};

if (env.NODE_ENV === "test" && import.meta.vitest) {
	const { describe, it, expect, beforeAll } = import.meta.vitest;
	const { mocks } = await import("../../../mocks");
	const { startTestServer } = await import("../../libs/msw");
	describe("categoryImpl", () => {
		beforeAll(() => {
			startTestServer();
		});

		it("get", async () => {
			const category = await CategoryImpl.get("foo");
			expect(category).toStrictEqual(mocks.category.category);
		});

		it("getMany", async () => {
			const category = await CategoryImpl.getMany();
			expect(category).toStrictEqual(mocks.category.categories);
		});
	});
}
