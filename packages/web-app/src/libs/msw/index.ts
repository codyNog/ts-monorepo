import { startTestServer, startTestWorker } from "@my/shared/front/libs/msw";

if (typeof window === "undefined") {
	startTestServer();
} else {
	startTestWorker();
}
