import { generateSchema } from "@anatine/zod-openapi";
import { z } from "zod";

const getCategoryParameter = z.object({ uid: z.string() });

export type GetCategoryParameter = z.infer<typeof getCategoryParameter>;
export const getCategoryParameterSchema = generateSchema(getCategoryParameter);

const updateCategoryParameter = z.object({ uid: z.string() });

export type UpdateCategoryParameter = z.infer<typeof updateCategoryParameter>;
export const updateCategoryParameterSchema = generateSchema(
	updateCategoryParameter,
);

const deleteCategoryParameter = z.object({ uid: z.string() });

export type DeleteCategoryParameter = z.infer<typeof deleteCategoryParameter>;
export const deleteCategoryParameterSchema = generateSchema(
	deleteCategoryParameter,
);
