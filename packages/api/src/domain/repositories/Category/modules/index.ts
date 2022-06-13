import { Prisma } from "@prisma/client";
import { Category } from "@my/shared/entities/Category";

const createData = (category: Category): Prisma.CategoryCreateInput => {
  const { uid: _, ...data } = category;

  return data;
};

const updateData = (category: Category): Prisma.CategoryUpdateInput => {
  return category;
};

export const categoryImplModules = {
  createData,
  updateData,
};
