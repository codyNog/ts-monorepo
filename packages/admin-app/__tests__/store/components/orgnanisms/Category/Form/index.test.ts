import { beforeAll, describe, expect, it } from "vitest";
import { useCategoryForm } from "~/store/components/organisms/Category/Form";
import { renderHook } from "@testing-library/react-hooks";
import { initialState } from "~/constants/state";
import { mocks } from "@my/shared/mocks";
import { startTestServer } from "@my/shared/front/libs/msw";

describe("useCategoryForm()", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("初期状態", () => {
    const { result } = renderHook(() => useCategoryForm());
    expect(result.current.category).toStrictEqual(initialState.category);
  });
});

describe("useCategoryForm(mocks.category.category)", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("初期状態", () => {
    const { result } = renderHook(() =>
      useCategoryForm(mocks.category.category)
    );
    expect(result.current.category).toStrictEqual(mocks.category.category);
  });
});
