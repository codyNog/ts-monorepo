import { beforeAll, describe, expect, it } from "vitest";
import { usePostForm } from "~/store/components/organisms/Post/Form";
import { renderHook } from "@testing-library/react-hooks";
import { initialState } from "~/constants/state";
import { mocks } from "@my/shared/mocks";
import { startTestServer } from "@my/shared/front/libs/msw";

describe("usePostForm()", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("初期状態", () => {
    const { result } = renderHook(() => usePostForm());
    expect(result.current.post).toStrictEqual(initialState.post);
  });
});

describe("usePostForm(mocks.post.post)", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("初期状態", () => {
    const { result } = renderHook(() => usePostForm(mocks.post.post));
    expect(result.current.post).toStrictEqual(mocks.post.post);
  });
});
