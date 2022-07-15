/* eslint-disable */
export type Methods = {
	/** user新規作成 */
	post: {
		status: 200;
		/** Default Response */
		resBody: {
			uid: string;
			name: string;
			posts: {
				uid: string;
				title: string;
				description: string;
				published: boolean;
				body: string;
				authorId: string;
				categories: { uid: string; name: string }[];
			}[];
			profile: { uid: string; biography: string } | null;
		};
		reqBody: {
			uid: string;
			name: string;
			posts: {
				uid: string;
				title: string;
				description: string;
				published: boolean;
				body: string;
				authorId: string;
				categories: { uid: string; name: string }[];
			}[];
			profile: { uid: string; biography: string } | null;
		};
	};
	/** user一覧取得 */
	get: {
		query?: { name?: string | undefined } | undefined;
		status: 200;
		/** Default Response */
		resBody: {
			uid: string;
			name: string;
			posts: {
				uid: string;
				title: string;
				description: string;
				published: boolean;
				body: string;
				authorId: string;
				categories: { uid: string; name: string }[];
			}[];
			profile: { uid: string; biography: string } | null;
		}[];
	};
};
