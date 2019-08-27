const path = require("path");
const srcDir = path.resolve(__dirname, "../src");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: srcDir,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"]
        }
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
