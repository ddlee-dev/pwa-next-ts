module.exports = {
  reactOptions: {
    fastRefresh: true
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.s?css$/i,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    });
    return config;
  }
};
