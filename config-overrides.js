const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = function override(options) {
  const config = { ...options };

  config.plugins = [
    ...config.plugins,
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      allowAsyncCycles: true,
      cwd: process.cwd(),
    }),
  ];

  return config;
};
