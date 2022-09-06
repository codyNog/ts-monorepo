import { useCallback } from "react";
import { useSWR } from "../../../libs/swr";
import { backend } from "../../../backend";
import { User } from "../../../../entities/User";
import { GetUsersParameter } from "../../../repositories/User/types";

const useGetUser = (uid: string, onError?: () => void) =>
	useSWR<User>(uid ? ["user", uid] : null, () => backend.user.get(uid), {
		onError,
	});

const useGetUsers = (query: GetUsersParameter, onError?: () => void) =>
	useSWR<User[]>(["users", String(query)], () => backend.user.getMany(query), {
		onError,
	});

export const useUser = () => {
	const createUser = useCallback(async (user: User) => {
		return await backend.user.create(user);
	}, []);

	const getUser = useGetUser;
	const getUsers = useGetUsers;

	const updateUser = useCallback(async (user: User) => {
		const newUser = await backend.user.update(user);
		return newUser;
	}, []);

	const deleteUser = useCallback(async (user: User) => {
		await backend.user.delete(user.uid);
	}, []);

	return { createUser, getUser, getUsers, updateUser, deleteUser };
};
