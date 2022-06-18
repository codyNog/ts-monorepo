import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "~/layouts";
import { RootPage } from "~/pages";
import { PostsPage } from "~/pages/posts";

export const Router = () => {
  return (
    <Layout>
      <HashRouter>
        <Routes>
          <Route path={"/"} element={<RootPage />} />
          <Route path={"/posts"} element={<PostsPage />} />
        </Routes>
      </HashRouter>
    </Layout>
  );
};
