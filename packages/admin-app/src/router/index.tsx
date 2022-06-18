import { Suspense, lazy } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Layout } from "~/layouts";
import { pagesPath } from "~/libs/$path";

const Root = lazy(() => import("~/pages"));
const Users = lazy(() => import("~/pages/users"));
const User = lazy(() => import("~/pages/users/:userUid"));
const UserPosts = lazy(() => import("~/pages/users/:userUid/posts"));
const UserPostNew = lazy(() => import("~/pages/users/:userUid/posts/new"));
const UserNew = lazy(() => import("~/pages/users/new"));
const Posts = lazy(() => import("~/pages/posts"));
const Post = lazy(() => import("~/pages/posts/:postUid"));
const Categories = lazy(() => import("~/pages/categories"));
const Category = lazy(() => import("~/pages/categories/:categoryUid"));
const CategoryNew = lazy(() => import("~/pages/categories/new"));
const NotFound = lazy(() => import("~/pages/404"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense>
          <Routes>
            <Route path={pagesPath.$url().pathname} element={<Root />} />
            {/* /users */}
            <Route path={pagesPath.users.$url().pathname} element={<Users />} />
            <Route
              path={pagesPath.users[":userUid"].$url().pathname}
              element={<User />}
            />
            <Route
              path={pagesPath.users[":userUid"].posts.$url().pathname}
              element={<UserPosts />}
            />
            <Route
              path={pagesPath.users[":userUid"].posts.new.$url().pathname}
              element={<UserPostNew />}
            />
            <Route
              path={pagesPath.users.new.$url().pathname}
              element={<UserNew />}
            />
            {/* /posts */}
            <Route path={pagesPath.posts.$url().pathname} element={<Posts />} />
            <Route
              path={pagesPath.posts[":postUid"].$url().pathname}
              element={<Post />}
            />
            {/* /categories */}
            <Route
              path={pagesPath.categories.$url().pathname}
              element={<Categories />}
            />
            <Route
              path={pagesPath.categories[":categoryUid"].$url().pathname}
              element={<Category />}
            />
            <Route
              path={pagesPath.categories.new.$url().pathname}
              element={<CategoryNew />}
            />
            {/* 404 */}
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
