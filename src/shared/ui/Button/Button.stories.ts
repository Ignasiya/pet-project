import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button, ThemeButton } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs'],

  args: { onClick: fn() },

  argTypes: {
    theme: {
      control: 'select',
      options: [ThemeButton.CLEAR, ThemeButton.OUTLINE]
    },
    className: {
      table: {
        disable: true
      }
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button'
  }
}

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR
  }
}

export const Outline: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE
  }
}
