import { User } from "@my/shared/entities/User";
import { Prisma } from "@prisma/client";

type CreateData =
  | (Prisma.Without<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput> &
      Prisma.UserUncheckedCreateInput)
  | (Prisma.Without<Prisma.UserUncheckedCreateInput, Prisma.UserCreateInput> &
      Prisma.UserCreateInput);

const createData = (user: User): CreateData => {
  const profile = {
    create: user.profile ? { biography: user.profile.biography } : undefined,
  };
  return {
    name: user.name,
    profile,
  };
};

type UpdateData =
  | (Prisma.Without<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput> &
      Prisma.UserUncheckedUpdateInput)
  | (Prisma.Without<Prisma.UserUncheckedUpdateInput, Prisma.UserUpdateInput> &
      Prisma.UserUpdateInput);

const updateData = (user: User): UpdateData => {
  return {
    name: user.name,
    profile: { update: user.profile || undefined },
    posts: {
      connect: user.posts.map(({ uid }) => ({ uid })),
    },
  };
};

export const userImplModules = { createData, updateData };
