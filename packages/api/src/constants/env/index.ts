const SENTRY_DSN = process.env.SENTRY_DSN || "";
const ENABLE_DOCS = process.env.ENABLE_DOCS || true;
const PORT = process.env.PORT || 8080;
const ENVIRONMENT = process.env.ENVIRONMENT || "development";

export const env = { SENTRY_DSN, ENABLE_DOCS, PORT, ENVIRONMENT };
