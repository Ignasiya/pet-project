import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs'],

  args: { onClick: fn(), to: '/' },

  argTypes: {
    theme: {
      control: 'select',
      options: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY, AppLinkTheme.RED]
    },
    className: {
      table: {
        disable: true
      }
    },
    to: {
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
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY
  }
}

export const Secondary: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY
  }
}

export const Red: Story = {
  args: {
    children: 'Link',
    theme: AppLinkTheme.RED
  }
}
