import { Category } from "@my/shared/entities/Category";
import { Post } from "@my/shared/entities/Post";
import { User } from "@my/shared/entities/User";
import { GetCategoriesParameter } from "@my/shared/front/repositories/Category/types";
import { GetPostsParameter } from "@my/shared/front/repositories/Post/types";
import { GetUsersParameter } from "@my/shared/front/repositories/User/types";

const user: User = {
  uid: "",
  name: "",
  posts: [],
  profile: { uid: "", biography: "" },
};

const category: Category = { uid: "", name: "" };

const post: Post = {
  uid: "",
  title: "",
  description: "",
  published: true,
  body: "",
  authorId: "",
  categories: [],
};

const getUsersParameter: GetUsersParameter = { name: "" };

const getCategoriesParameter: GetCategoriesParameter = { name: "" };

const getPostsParameter: GetPostsParameter = { title: "", authorId: "" };

export const initialState = {
  user,
  category,
  post,
  getUsersParameter,
  getCategoriesParameter,
  getPostsParameter,
};
