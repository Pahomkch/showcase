import type {StorybookConfig} from '@storybook/react-webpack5'
import webpackConfig from '../../webpack.config'
const appWebpackConfig = webpackConfig({mode: 'development'})

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  webpackFinal: async (config) => {
    console.log('INSIDE: ', config.resolve)
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...appWebpackConfig.module.rules],
      },

      resolve: {
        ...config.resolve,
        modules: [
          ...config.resolve.modules,
          ...appWebpackConfig.resolve.modules,
        ],
      },
    }
  },
}
export default config
