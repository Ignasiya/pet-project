import { ThemeProvider } from 'app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { FallbackComponent } from 'widgets/FallbackComponent'

type Props = {
  children: ReactNode
}

export function Providers({ children }: Props) {
  const logError = (error: Error, info: { componentStack: string }) => {
    console.log(error, info)
  }

  const handleReset = () => {
    location.reload()
  }

  return (
    <BrowserRouter>
      <ErrorBoundary
        FallbackComponent={FallbackComponent}
        onError={logError}
        onReset={handleReset}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
