const path = require("path");
const nodeExternals = require("webpack-node-externals");

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
            configFile: "tsconfig.json",
          },
        },
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".js"],
  },
  target: ["web", "es5"],
  externals: [
    nodeExternals({
      modulesFromFile: true,
      allowlist: ["@my/shared"],
    }),
  ],
};
