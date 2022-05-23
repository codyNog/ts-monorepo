import { startTestServer } from "../../../front/libs/msw";
import { UserImpl } from "../../../front/repositories/User";
import { mocks } from "../../../mocks";
import { beforeAll, describe, expect, it } from "vitest";

describe("userImpl", () => {
  beforeAll(() => {
    startTestServer();
  });

  it("get", async () => {
    const user = await UserImpl.get("foo");
    expect(user).toStrictEqual(mocks.user.user);
  });

  it("getMany", async () => {
    const user = await UserImpl.getMany();
    expect(user).toStrictEqual(mocks.user.users);
  });
});
