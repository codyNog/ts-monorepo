import { User } from "@my/shared/entities/User";
import { Prisma } from "@prisma/client";

const createData = (user: User): Prisma.UserUncheckedCreateInput => {
  return {
    name: user.name,
    profile: {
      create: user.profile ? { biography: user.profile.biography } : undefined,
    },
  };
};

const updateData = (user: User): Prisma.UserUncheckedUpdateInput => {
  return {
    name: user.name,
    profile: { update: user.profile || undefined },
    posts: {
      connect: user.posts.map(({ uid }) => ({ uid })),
    },
  };
};

export const userImplModules = { createData, updateData };
