/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["@my/shared"]);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
});
const path = require("path");

const nextConfig = withBundleAnalyzer(
  withTM({
    reactStrictMode: true,
    webpack(config) {
      config.resolve.alias["~"] = path.join(__dirname, "src");
      return config;
    },
  })
);

module.exports = nextConfig;
