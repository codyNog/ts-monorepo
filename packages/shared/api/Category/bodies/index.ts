import { Category, categorySchema } from "../../../entities/Category";

export type CreateCategoryBody = Category;
export const createCategoryBodySchema = categorySchema;

export type UpdateCategoryBody = Category;
export const updateCategoryBodySchema = categorySchema;
