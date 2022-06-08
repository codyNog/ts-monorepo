const path = require("path");
const nodeExternals = require("webpack-node-externals");
const tsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: { filename: "index.js" },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      "~": path.resolve(__dirname, "src"),
      "@my/shared": path.resolve(__dirname, ",,/../shared"),
    },
    extensions: [".ts", ".js"],
    plugins: [new tsconfigPathsPlugin({ configFile: "tsconfig.json" })],
  },
  target: ["web", "es5"],
  externals: [
    nodeExternals({
      modulesFromFile: true,
      allowlist: ["@my/shared"],
    }),
  ],
};
