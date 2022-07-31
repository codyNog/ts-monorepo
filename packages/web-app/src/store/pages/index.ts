import { useCallback } from "react";
import { pagesPath } from "~/libs/$path";
import { useRouter } from "~/store/util/Router";

export const useRootPage = () => {
	const { push } = useRouter();

	const onSubmit = useCallback(
		() => {
			push(pagesPath.posts.$url().pathname);
		},
		[push],
	);

	return { onSubmit };
};
