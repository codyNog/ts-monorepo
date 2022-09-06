import { User } from "@my/shared/entities/User";
import { atom, useAtom } from "jotai";
import { useCallback } from "react";

const meAtom = atom<User | undefined>(undefined);

export const useAuth = () => {
	const [me, setMe] = useAtom(meAtom);

	const login = useCallback(async () => {
		if (me) {
			return;
		}
	}, [me]);

	const onSessionExpired = useCallback(async () => {
		setMe(undefined);
	}, [setMe]);

	return { me, login, onSessionExpired };
};
