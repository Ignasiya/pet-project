import { Button } from '../Button'
import { useEffect, useState } from 'react'

export function BugButton() {
  const [error, setError] = useState(false)

  const onThrowError = () => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return <Button onClick={onThrowError}>{'🐛'}</Button>
}
