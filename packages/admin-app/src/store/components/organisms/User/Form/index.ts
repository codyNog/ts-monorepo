import { useState, useCallback } from "react";
import { User } from "@my/shared/entities/User";
import { initialState } from "~/constants/state";

export const useUserForm = (userProps?: User) => {
  const [user, setUser] = useState<User>(userProps || initialState.user);

  const onChangeName = useCallback(
    (name: string) => {
      setUser((prev) => ({ ...prev, name }));
    },
    [setUser]
  );

  const onChangeBiography = useCallback(
    (biography: string) => {
      setUser((prev) => {
        return {
          ...prev,
          profile: { uid: prev.profile?.uid || "", biography },
        };
      });
    },
    [setUser]
  );

  return { user, onChangeName, onChangeBiography };
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
