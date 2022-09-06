import { rest, ResponseResolver, RestContext, RestRequest } from "msw";
type A1<T> = T extends (a1: infer I) => unknown ? I : never;
//
// Aspida で生成される Methods型を模倣したもの。型をキャプチャするために用意
//
type Method = {
	reqHeaders: any;
	query: any;
	status: number;
	resBody: any;
	reqBody: any;
};
type MethodNames = "get" | "post" | "put" | "patch" | "delete";
type Methods = {
	[K in MethodNames]: Method;
};
//
// restPost 関数第一引数の期待値（型）
//
type Post = {
	post: (option: {
		body: Methods["post"]["reqBody"];
		query: Methods["post"]["query"];
		config?: any;
	}) => Promise<Methods["post"]["resBody"]>;
	$path: () => string;
};
//
// 型の lookup で第二引数の resolver に型注釈を与える
//
export function restPost<T extends Post>(
	api: T,
	resolver: ResponseResolver<
		RestRequest<A1<T["post"]>["body"]>,
		RestContext,
		Awaited<ReturnType<T["post"]>>["body"]
	>,
) {
	return rest.post(api.$path(), resolver);
}

type Get = {
	get: (option: {
		body: Methods["get"]["reqBody"];
		query: Methods["get"]["query"];
		config?: any;
	}) => Promise<Methods["get"]["resBody"]>;
	$path: () => string;
};

export function restGet<T extends Get>(
	api: T,
	resolver: ResponseResolver<
		RestRequest<A1<T["get"]>["body"]>,
		RestContext,
		Awaited<ReturnType<T["get"]>>["body"]
	>,
) {
	return rest.get(api.$path(), resolver);
}

type Put = {
	put: (option: {
		body: Methods["put"]["reqBody"];
		query: Methods["put"]["query"];
		config?: any;
	}) => Promise<Methods["put"]["resBody"]>;
	$path: () => string;
};

export function restPut<T extends Put>(
	api: T,
	resolver: ResponseResolver<
		RestRequest<A1<T["put"]>["body"]>,
		RestContext,
		Awaited<ReturnType<T["put"]>>["body"]
	>,
) {
	return rest.put(api.$path(), resolver);
}

type Delete = {
	delete: (option: {
		body: Methods["delete"]["reqBody"];
		query: Methods["delete"]["query"];
		config?: any;
	}) => Promise<Methods["delete"]["resBody"]>;
	$path: () => string;
};

export function restDelete<T extends Delete>(
	api: T,
	resolver: ResponseResolver<
		RestRequest<A1<T["delete"]>["body"]>,
		RestContext,
		Awaited<ReturnType<T["delete"]>>["body"]
	>,
) {
	return rest.delete(api.$path(), resolver);
}
