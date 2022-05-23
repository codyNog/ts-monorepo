import { startTestServer } from "../../../front/libs/msw";
import { CategoryImpl } from "../../../front/repositories/Category";
import { mocks } from "../../../mocks";
import { beforeAll, describe, expect, it } from "vitest";

describe("categoryImpl", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("get", async () => {
    const category = await CategoryImpl.get("foo");
    expect(category).toStrictEqual(mocks.category.category);
  });

  it("getMany", async () => {
    const category = await CategoryImpl.getMany();
    expect(category).toStrictEqual(mocks.category.categories);
  });
});
