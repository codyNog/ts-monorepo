import { useCallback, useState } from "react";
import { User } from "@my/shared/entities/User";
import { GetUsersParameter } from "@my/shared/front/repositories/User/types";
import { useUser } from "@my/shared/front/store/domain/User";
import { initialState } from "~/constants/state";

export const useUserList = () => {
	const [parameter, setParameter] = useState<GetUsersParameter>(
		initialState.getUsersParameter,
	);
	const { getUsers, deleteUser } = useUser();

	const submit = setParameter;

	const { data: users, mutate } = getUsers(parameter);

	const onClickDeleteButton = useCallback(
		async (user: User) => {
			await deleteUser(user);
			mutate();
		},
		[mutate],
	);

	return { users, parameter, submit, onClickDeleteButton };
};

if (import.meta.vitest) {
	const { describe, it, expect, beforeAll } = import.meta.vitest;
	const { mocks } = await import("@my/shared/mocks");
	const { renderHook, waitFor } = await import("@testing-library/react");
	const { startTestServer } = await import("@my/shared/front/libs/msw");

	describe(
		"useUserList",
		() => {
			beforeAll(() => {
				startTestServer();
			});

			it(
				"初期状態",
				async () => {
					const { result } = renderHook(useUserList);
					expect<User[] | undefined>(result.current.users).toStrictEqual<
						User[] | undefined
					>(undefined);

					waitFor(() => {
						expect<User[] | undefined>(result.current.users).toStrictEqual<
							User[] | undefined
						>(mocks.user.users);
					});
				},
			);
		},
	);
}
