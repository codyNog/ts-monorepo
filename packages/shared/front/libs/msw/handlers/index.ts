import { mocks } from "../../../../mocks";
import { v1Client } from "../../aspida";
import { restDelete, restGet, restPost, restPut } from "../typed";

const user = [
	restPost(v1Client.users, (_req, res, ctx) => {
		return res(ctx.json(mocks.user.user));
	}),
	restGet(v1Client.users._uid("*"), (_req, res, ctx) => {
		return res(ctx.json(mocks.user.user));
	}),
	restGet(v1Client.users, (_req, res, ctx) => {
		return res(ctx.json(mocks.user.users));
	}),
	restPut(v1Client.users._uid("*"), (_req, res, ctx) => {
		return res(ctx.json(mocks.user.user));
	}),
	restDelete(v1Client.users._uid("*"), (_req, res, ctx) => {
		return res(ctx.status(200));
	}),
];

const post = [
	restPost(v1Client.posts, (_req, res, ctx) => {
		return res(ctx.json(mocks.post.post));
	}),
	restGet(v1Client.posts, (_req, res, ctx) => {
		return res(ctx.json(mocks.post.posts));
	}),
	restGet(v1Client.posts._uid("*"), (_req, res, ctx) => {
		return res(ctx.json(mocks.post.post));
	}),
];

const category = [
	restPost(v1Client.categories, (_req, res, ctx) => {
		return res(ctx.json(mocks.category.category));
	}),
	restGet(v1Client.categories, (_req, res, ctx) => {
		return res(ctx.json(mocks.category.categories));
	}),
	restGet(v1Client.categories._uid("*"), (_req, res, ctx) => {
		return res(ctx.json(mocks.category.category));
	}),
];

export const mswHandlers = [...user, ...post, ...category];
