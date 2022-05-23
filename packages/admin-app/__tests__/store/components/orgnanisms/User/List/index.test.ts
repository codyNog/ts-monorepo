import { beforeAll, describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import { useUserList } from "~/store/components/organisms/User/List";
import { mocks } from "@my/shared/mocks";
import { startTestServer } from "@my/shared/front/libs/msw";

describe("useUserList", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("初期状態", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useUserList());

    expect(result.current.users).toBe(undefined);

    await waitForNextUpdate();

    expect(result.current.users).toStrictEqual(mocks.user.users);
  });
});
