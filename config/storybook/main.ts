import type {StorybookConfig} from '@storybook/react-webpack5'
import appWebpackConfig from '../../webpack.config'

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
    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...appWebpackConfig({mode: 'development'}).module.rules],
      },
    }
  },
}
export default config
