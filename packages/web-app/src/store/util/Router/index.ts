import { useRouter as useNRouter } from "next/router";

export const useRouter = () => {
	const { push } = useNRouter();

	return { push };
};
