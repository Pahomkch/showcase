import type {Preview} from '@storybook/react'
import {browserRouter} from './decorators/browserRouter'

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [browserRouter],
}

export default preview
