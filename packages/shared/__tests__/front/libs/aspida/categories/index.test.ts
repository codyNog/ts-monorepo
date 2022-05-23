import { Category } from "@my/shared/entities/Category";
import { v1Client } from "@my/shared/front/libs/aspida";
import { startTestServer } from "@my/shared/front/libs/msw";
import { mocks } from "@my/shared/mocks";
import { beforeAll, describe, expect, it } from "vitest";

describe("/categories", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("get:/categories", async () => {
    const categories: Category[] = await v1Client.categories.$get();
    expect(categories).toStrictEqual(mocks.category.categories);
  });

  it("get:/categories/:uid", async () => {
    const category: Category = await v1Client.categories._uid("foo").$get();
    expect(category).toStrictEqual(mocks.category.category);
  });
});
