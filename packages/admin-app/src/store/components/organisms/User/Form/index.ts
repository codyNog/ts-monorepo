import { useCallback } from "react";
import { User } from "@my/shared/entities/User";
import { initialState } from "~/constants/state";
import { useForm } from "react-hook-form";

export const useUserForm = (userProps?: User) => {
  const { register, watch, handleSubmit, setValue } = useForm<User>({
    defaultValues: userProps || initialState.user,
  });

  const user = watch();

  const onChangeBiography = useCallback(
    (value: string) => {
      setValue("profile.biography", value);
    },
    [setValue]
  );

  return { user, register, handleSubmit, onChangeBiography };
};

if (import.meta.vitest) {
  const { describe, it, expect, beforeAll } = import.meta.vitest;
  const { mocks } = await import("@my/shared/mocks");
  const { renderHook } = await import("@testing-library/react");
  const { startTestServer } = await import("@my/shared/front/libs/msw");

  describe("useCategoryForm()", () => {
    beforeAll(() => {
      startTestServer();
    });

    it("初期状態", () => {
      const { result } = renderHook(() => useUserForm());
      expect<User>(result.current.user).toStrictEqual<User>(initialState.user);
    });
  });

  describe("useCategoryForm(mocks.user.user)", () => {
    beforeAll(() => {
      startTestServer();
    });

    it("初期状態", () => {
      const { result } = renderHook(() => useUserForm(mocks.user.user));
      expect<User>(result.current.user).toStrictEqual<User>(mocks.user.user);
    });
  });
}
