import { useTranslation } from 'react-i18next'

export default function MainPage() {
  const { t } = useTranslation('main')

  return (
    <div>
      <h1>{t('Главная страница')}</h1>
    </div>
  )
}
