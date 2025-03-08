import { useTranslation } from 'react-i18next'
import styles from './FallbackComponent.module.scss'

type FallbackComponentProps = {
  error: Error
  resetErrorBoundary: () => void
}

export function FallbackComponent({
  error,
  resetErrorBoundary
}: FallbackComponentProps) {
  const { t } = useTranslation('error')

  return (
    <div role='alert' className={styles.fallback}>
      <h1>{t('Что-то пошло не так')}:</h1>
      <pre>{error.message || '500 🐛'}</pre>
      <button onClick={resetErrorBoundary} className={styles.button}>
        {t('Обновить страницу')}
      </button>
    </div>
  )
}
