/* eslint-disable */
export type Methods = {
	/** post一件取得 */
	get: {
		status: 200;
		/** Default Response */
		resBody: {
			uid: string;
			title: string;
			description: string;
			published: boolean;
			body: string;
			authorId: string;
			categories: { uid: string; name: string }[];
		};
	};
	/** post編集 */
	put: {
		status: 200;
		/** Default Response */
		resBody: {
			uid: string;
			title: string;
			description: string;
			published: boolean;
			body: string;
			authorId: string;
			categories: { uid: string; name: string }[];
		};
		reqBody: {
			uid: string;
			title: string;
			description: string;
			published: boolean;
			body: string;
			authorId: string;
			categories: { uid: string; name: string }[];
		};
	};
	/** post一件削除 */
	delete: { status: 200 };
};
