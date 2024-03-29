// import { themeProvider } from 'config/storybook/decorators/themeProvider'
import {themeProvider} from '../../../config/storybook/decorators/themeProvider'
import {Modal} from '.'
import type {Meta, StoryObj} from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
  decorators: [themeProvider('light')],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Modal contnet',
    target: document.body,
    isOpen: true,
    onClose: () => {},
  },
}
