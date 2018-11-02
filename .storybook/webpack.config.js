module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    exclude: /node_modules/,
    loader: require.resolve('awesome-typescript-loader'),
    test: /\.(ts|tsx)$/,
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
