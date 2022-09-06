export const pagesPath = {
	posts: {
		$url: (url?: { hash?: string }) => ({
			pathname: "/posts" as const,
			hash: url?.hash,
		}),
	},
	users: {
		_uid: (uid: string | number) => ({
			posts: {
				$url: (url?: { hash?: string }) => ({
					pathname: "/users/[uid]/posts" as const,
					query: { uid },
					hash: url?.hash,
				}),
			},
			$url: (url?: { hash?: string }) => ({
				pathname: "/users/[uid]" as const,
				query: { uid },
				hash: url?.hash,
			}),
		}),
	},
	$url: (url?: { hash?: string }) => ({
		pathname: "/" as const,
		hash: url?.hash,
	}),
};

export type PagesPath = typeof pagesPath;
