const { defineConfig } = require("@rspack/cli");
const { join } = require("path");

module.exports = defineConfig({
  entry: {
    main: join(process.cwd(), "./src/index.ts"),
  },
  mode: "production",
  output: {
    path: join(process.cwd(), "./output"),
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    minimize: false,
    usedExports: true,
    sideEffects: true,
    providedExports: true,
    innerGraph: true,
    concatenateModules: false,
    splitChunks: {
      chunks: "all",
      minSize: 1,
      minChunks: 1,
      cacheGroups: {
        blocksuite: {
          name: `npm-blocksuite`,
          test: (module) => {
            return /[\\/]node_modules[\\/](@blocksuite)[\\/]/.test(
              module.nameForCondition()
            );
          },
          priority: 200,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
            },
            target: "es2022",
          },
        },
        type: "javascript/auto",
      },
    ],
  },
});
