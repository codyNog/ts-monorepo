import { useState, useCallback } from "react";
import { Category } from "@my/shared/entities/Category";
import { initialState } from "~/constants/state";
import { env } from "@my/shared/front/env";

export const useCategoryForm = (categoryProps?: Category) => {
  const [category, setCategory] = useState<Category>(
    categoryProps || initialState.category
  );

  const onChangeName = useCallback(
    (name: string) => {
      setCategory((prev) => ({ ...prev, name }));
    },
    [setCategory]
  );

  return { category, onChangeName };
};

if (!!import.meta.vitest) {
  const { describe, it, expect, beforeAll } = import.meta.vitest;
  const { mocks } = await import("@my/shared/mocks");
  const { renderHook } = await import("@testing-library/react-hooks");
  const { startTestServer } = await import("@my/shared/front/libs/msw");

  describe("useCategoryForm()", () => {
    beforeAll(() => {
      startTestServer();
    });

    it("初期状態", () => {
      const { result } = renderHook(() => useCategoryForm());
      expect<Category>(result.current.category).toStrictEqual<Category>(
        initialState.category
      );
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
      expect<Category>(result.current.category).toStrictEqual<Category>(
        mocks.category.category
      );
    });
  });
}
