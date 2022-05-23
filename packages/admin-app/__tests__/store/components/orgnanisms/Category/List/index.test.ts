import { beforeAll, describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import { mocks } from "@my/shared/mocks";
import { startTestServer } from "@my/shared/front/libs/msw";
import { useCategoryList } from "~/store/components/organisms/Category/List";

describe("useCategoryList", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("初期状態", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCategoryList());

    expect(result.current.categories).toBe(undefined);

    await waitForNextUpdate();

    expect(result.current.categories).toStrictEqual(mocks.category.categories);
  });
});
