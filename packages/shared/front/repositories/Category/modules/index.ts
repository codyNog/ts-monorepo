import {
	CreateCategoryBody,
	UpdateCategoryBody,
} from "../../../../api/Category/bodies";
import {
	DeleteCategoryParameter,
	GetCategoryParameter,
	UpdateCategoryParameter,
} from "../../../../api/Category/parameters";
import { Category } from "../../../../entities/Category";
import { GetCategoriesQuery } from "../../../../api/Category/queries";
import { GetCategoriesParameter } from "../types";

type Create = { body: CreateCategoryBody };

const create = (post: Category): Create => {
	const body: CreateCategoryBody = post;
	return { body };
};

type Get = { param: GetCategoryParameter };

const get = (uid: string): Get => {
	const param: GetCategoryParameter = { uid };
	return { param };
};

type GetMany = { query: GetCategoriesParameter | undefined };

const getMany = (param?: GetCategoriesParameter): GetMany => {
	const query: GetCategoriesQuery | undefined = param;
	return { query };
};

type Update = { param: UpdateCategoryParameter; body: UpdateCategoryBody };

const update = (post: Category): Update => {
	const param: UpdateCategoryParameter = { uid: post.uid };
	const body: UpdateCategoryBody = post;

	return { param, body };
};

type Delete = { param: DeleteCategoryParameter };

const deleteCategory = (uid: string): Delete => {
	const param: DeleteCategoryParameter = { uid };

	return { param };
};

export const postImplModules = {
	create,
	get,
	getMany,
	update,
	delete: deleteCategory,
};
