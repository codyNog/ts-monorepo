import { mocks } from "@my/shared/mocks";
import { CategoryImpl } from "~/domain/repositories/Category";
import { expect, it, describe } from "vitest";

describe(
	"CategoryImpl",
	() => {
		it(
			"getMany",
			async () => {
				const categories = await CategoryImpl.getMany({});
				expect(categories).toStrictEqual([]);
			},
		);

		it(
			"create",
			async () => {
				const category = await CategoryImpl.create(mocks.category.category);
				expect(category);
				const categories = await CategoryImpl.getMany({});
				expect(categories).toStrictEqual([category]);
			},
		);

		it(
			"getCategory",
			async () => {
				const newCategory = await CategoryImpl.get(mocks.category.category.uid);
				expect(newCategory).toStrictEqual(mocks.category.category);
			},
		);

		it(
			"update",
			async () => {
				const category = { ...mocks.category.category, name: "aaa" };
				await CategoryImpl.update(category);
				const newCategory = await CategoryImpl.get(category.uid);
				expect(newCategory).toStrictEqual(category);
				const categories = await CategoryImpl.getMany({});
				expect(categories).toStrictEqual([newCategory]);
			},
		);

		it(
			"delete",
			async () => {
				const categories = await CategoryImpl.getMany({});
				const category = categories[0];
				await CategoryImpl.delete(category.uid);
				const newCategories = await CategoryImpl.getMany({});
				expect(newCategories).toStrictEqual([]);
			},
		);
	},
);
