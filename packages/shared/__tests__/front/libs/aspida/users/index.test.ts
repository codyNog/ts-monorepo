import { User } from "@my/shared/entities/User";
import { v1Client } from "@my/shared/front/libs/aspida";
import { startTestServer } from "@my/shared/front/libs/msw";
import { mocks } from "@my/shared/mocks";
import { beforeAll, describe, expect, it } from "vitest";

describe("/users", () => {
	beforeAll(() => {
		startTestServer();
	});

	it("get:/users", async () => {
		const users: User[] = await v1Client.users.$get();
		expect(users).toStrictEqual(mocks.user.users);
	});

	it("get:/users/:uid", async () => {
		const user: User = await v1Client.users._uid("foo").$get();
		expect(user).toStrictEqual(mocks.user.user);
	});
});
