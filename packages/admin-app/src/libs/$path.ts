export const pagesPath = {
	$404: {
		$url: (url?: { hash?: string }) => ({
			pathname: "/404" as const,
			hash: url?.hash,
		}),
	},
	categories: {
		":categoryUid": {
			$url: (url?: { hash?: string }) => ({
				pathname: "/categories/:categoryUid" as const,
				hash: url?.hash,
			}),
		},
		new: {
			$url: (url?: { hash?: string }) => ({
				pathname: "/categories/new" as const,
				hash: url?.hash,
			}),
		},
		$url: (url?: { hash?: string }) => ({
			pathname: "/categories" as const,
			hash: url?.hash,
		}),
	},
	posts: {
		":postUid": {
			$url: (url?: { hash?: string }) => ({
				pathname: "/posts/:postUid" as const,
				hash: url?.hash,
			}),
		},
		new: {
			$url: (url?: { hash?: string }) => ({
				pathname: "/posts/new" as const,
				hash: url?.hash,
			}),
		},
		$url: (url?: { hash?: string }) => ({
			pathname: "/posts" as const,
			hash: url?.hash,
		}),
	},
	seeds: {
		$url: (url?: { hash?: string }) => ({
			pathname: "/seeds" as const,
			hash: url?.hash,
		}),
	},
	users: {
		":userUid": {
			posts: {
				new: {
					$url: (url?: { hash?: string }) => ({
						pathname: "/users/:userUid/posts/new" as const,
						hash: url?.hash,
					}),
				},
				$url: (url?: { hash?: string }) => ({
					pathname: "/users/:userUid/posts" as const,
					hash: url?.hash,
				}),
			},
			$url: (url?: { hash?: string }) => ({
				pathname: "/users/:userUid" as const,
				hash: url?.hash,
			}),
		},
		new: {
			$url: (url?: { hash?: string }) => ({
				pathname: "/users/new" as const,
				hash: url?.hash,
			}),
		},
		$url: (url?: { hash?: string }) => ({
			pathname: "/users" as const,
			hash: url?.hash,
		}),
	},
	$url: (url?: { hash?: string }) => ({
		pathname: "/" as const,
		hash: url?.hash,
	}),
};

export type PagesPath = typeof pagesPath;
