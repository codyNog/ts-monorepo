import { generateMock } from "@anatine/zod-mock";
import { z } from "zod";
import { Category, zodCategory } from "../entities/Category";
import { Post, zodPost } from "../entities/Post";
import { User, zodUser } from "../entities/User";

const user: User = { ...generateMock(zodUser), uid: "foo" };
const users: User[] = generateMock(z.array(zodUser).length(3));
const seeds: User[] = generateMock(z.array(zodUser).length(20));

const post: Post = generateMock(zodPost);
const posts: Post[] = generateMock(z.array(zodPost).length(3));

const category: Category = generateMock(zodCategory);
const categories: Category[] = generateMock(z.array(zodCategory).length(3));

export const mocks = {
  user: { user, users },
  post: { post, posts },
  category: { category, categories },
  seeds,
};
