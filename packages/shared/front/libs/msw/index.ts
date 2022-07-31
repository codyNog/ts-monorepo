import { setupWorker } from "msw";
import { setupServer } from "msw/node";
import { mswHandlers } from "./handlers";

export const startTestWorker = () => {
	const worker = setupWorker(...mswHandlers);
	worker.start();
};

export const startTestServer = () => {
	const server = setupServer(...mswHandlers);
	server.listen();
};
