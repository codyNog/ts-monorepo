import { beforeAll, describe, expect, it } from "vitest";
import { useUserForm } from "~/store/components/organisms/User/Form";
import { renderHook } from "@testing-library/react-hooks";
import { initialState } from "~/constants/state";
import { mocks } from "@my/shared/mocks";
import { startTestServer } from "@my/shared/front/libs/msw";

describe("useUserForm()", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("初期状態", () => {
    const { result } = renderHook(() => useUserForm());
    expect(result.current.user).toStrictEqual(initialState.user);
  });
});

describe("useUserForm(mocks.user.user)", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("初期状態", () => {
    const { result } = renderHook(() => useUserForm(mocks.user.user));
    expect(result.current.user).toStrictEqual(mocks.user.user);
  });
});
