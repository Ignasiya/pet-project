import { Button, ThemeButton } from 'shared/ui/Button'
import { render, screen } from '@testing-library/react'

describe('Button component', () => {
  test('render', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('render with clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
  })
})
