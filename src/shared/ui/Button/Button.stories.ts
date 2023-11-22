import {themeProvider} from '../../../../config/storybook/decorators/themeProvider'
import {Button} from './'
import type {Meta, StoryObj} from '@storybook/react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Dark: Story = {
  args: {
    children: 'Button',
  },
}

export const SizeS: Story = {
  args: {
    children: 's',
    size: 's',
  },
}

export const SizeM: Story = {
  args: {
    children: 'm',
    size: 'm',
  },
}

export const SizeL: Story = {
  args: {
    children: 'l',
    size: 'l',
  },
}

export const Rounded: Story = {
  args: {
    children: 'full',
    rounded: 'full',
  },
}

export const Primary: Story = {
  args: {
    children: 'primary',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'secondary',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'outline',
    variant: 'outline',
  },
}

Dark.decorators = [themeProvider('dark')]
