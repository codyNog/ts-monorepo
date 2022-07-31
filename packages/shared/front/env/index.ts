type NODEENV = "production" | "development" | "test";

const BASE_URL = "http://localhost:8080";
const NODE_ENV: NODEENV = (process.env.NODE_ENV as NODEENV | undefined) || "development";

export const env = { BASE_URL, NODE_ENV };
