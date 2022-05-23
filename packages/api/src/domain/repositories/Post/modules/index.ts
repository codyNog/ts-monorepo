import { Post } from "@my/shared/entities/Post";
import { Prisma } from "@prisma/client";

type CreateData =
  | (Prisma.Without<Prisma.PostCreateInput, Prisma.PostUncheckedCreateInput> &
      Prisma.PostUncheckedCreateInput)
  | (Prisma.Without<Prisma.PostUncheckedCreateInput, Prisma.PostCreateInput> &
      Prisma.PostCreateInput);

const createData = (post: Post): CreateData => {
  const { uid: _, categories, ...rest } = post;

  const data: CreateData = {
    ...rest,
    categories: { connect: categories.map(({ uid }) => ({ uid })) },
  };
  return data;
};

type UpdateData =
  | (Prisma.Without<Prisma.PostUpdateInput, Prisma.PostUncheckedUpdateInput> &
      Prisma.PostUncheckedUpdateInput)
  | (Prisma.Without<Prisma.PostUncheckedUpdateInput, Prisma.PostUpdateInput> &
      Prisma.PostUpdateInput);

const updateData = (post: Post): UpdateData => {
  const { categories, ...rest } = post;

  const data: UpdateData = {
    ...rest,
    categories: { connect: categories.map(({ uid }) => ({ uid })) },
  };

  return data;
};

export const postImplModules = { createData, updateData };
