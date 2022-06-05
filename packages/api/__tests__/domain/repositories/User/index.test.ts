import { mocks } from "@my/shared/mocks";
import { UserImpl } from "~/domain/repositories/User";
import { expect, it, describe } from "vitest";

describe("UserImpl", () => {
  it("getMany", async () => {
    const users = await UserImpl.getMany({});
    expect(users).toStrictEqual([]);
  });

  it("create", async () => {
    const user = await UserImpl.create(mocks.user.user);
    expect(user);
    const users = await UserImpl.getMany({});
    expect(users).toStrictEqual([user]);
  });

  it("getUser", async () => {
    const newUser = await UserImpl.get(mocks.user.user.uid);
    expect(newUser).toStrictEqual(mocks.user.user);
  });

  it("update", async () => {
    const user = { ...mocks.user.user, name: "aaa" };
    await UserImpl.update(user);
    const newUser = await UserImpl.get(user.uid);
    expect(newUser).toStrictEqual(user);
    const users = await UserImpl.getMany({});
    expect(users).toStrictEqual([newUser]);
  });

  it("delete", async () => {
    const users = await UserImpl.getMany({});
    const user = users[0];
    await UserImpl.delete(user.uid);
    const newUsers = await UserImpl.getMany({});
    expect(newUsers).toStrictEqual([]);
  });
});
