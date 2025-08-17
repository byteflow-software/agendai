module.exports = function (api) {
  api.cache(true);
  const presets = ["babel-preset-expo"];
  const plugins = [
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        safe: true,
        allowUndefined: false,
      },
    ],
  ];

  if (process.env.NODE_ENV === "production") {
    plugins.push("transform-remove-console");
  }

  return { presets, plugins };
};