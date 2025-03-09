import type { Meta, StoryObj } from '@storybook/react'
import { FallbackComponent } from './FallbackComponent'

const meta = {
  title: 'widgets/FallbackComponent',
  component: FallbackComponent,
  parameters: {
    layout: 'fullscreen'
  },

  argTypes: {
    error: {
      control: false
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof FallbackComponent>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultError: Story = {
  args: {
    error: new Error('Something went wrong'),
    resetErrorBoundary: () => alert('Reset clicked')
  }
}

export const CustomError: Story = {
  args: {
    error: new Error('Network timeout'),
    resetErrorBoundary: () => console.log('Reset triggered')
  }
}

export const ServerError: Story = {
  args: {
    error: { message: '' } as Error,
    resetErrorBoundary: () => alert('Reset for server error')
  }
}
