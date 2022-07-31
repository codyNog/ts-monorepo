/* eslint-disable */
export type Methods = {
	/** category新規作成 */
	post: {
		status: 200;
		/** Default Response */
		resBody: { uid: string; name: string };
		reqBody: { uid: string; name: string };
	};
	/** category一覧取得 */
	get: {
		query?: { name?: string | undefined } | undefined;
		status: 200;
		/** Default Response */
		resBody: { uid: string; name: string }[];
	};
};
