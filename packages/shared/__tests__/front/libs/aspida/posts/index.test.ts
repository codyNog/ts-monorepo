import { Post } from "@my/shared/entities/Post";
import { v1Client } from "@my/shared/front/libs/aspida";
import { startTestServer } from "@my/shared/front/libs/msw";
import { mocks } from "@my/shared/mocks";
import { beforeAll, describe, expect, it } from "vitest";

describe("/posts", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("get:/posts", async () => {
    const posts: Post[] = await v1Client.posts.$get();
    expect(posts).toStrictEqual(mocks.post.posts);
  });

  it("get:/posts/:uid", async () => {
    const post: Post = await v1Client.posts._uid("foo").$get();
    expect(post).toStrictEqual(mocks.post.post);
  });
});
