import { startTestServer } from "../../../front/libs/msw";
import { PostImpl } from "../../../front/repositories/Post";
import { mocks } from "../../../mocks";
import { beforeAll, describe, expect, it } from "vitest";

describe("postImpl", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("get", async () => {
    const post = await PostImpl.get("foo");
    expect(post).toStrictEqual(mocks.post.post);
  });

  it("getMany", async () => {
    const post = await PostImpl.getMany();
    expect(post).toStrictEqual(mocks.post.posts);
  });
});
