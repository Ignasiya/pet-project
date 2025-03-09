import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: Theme.LIGHT,
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: Theme.LIGHT, title: 'Light' },
          { value: Theme.DARK, title: 'Dark' }
        ],
        showName: true
      }
    }
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || Theme.LIGHT

      return (
        <BrowserRouter>
          <div className={`app ${theme}`} style={{ minHeight: 'auto' }}>
            <Story />
          </div>
        </BrowserRouter>
      )
    }
  ]
}

export default preview
