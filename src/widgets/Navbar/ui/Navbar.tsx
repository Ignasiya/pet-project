import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation()

  return (
    <nav className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink
          to={'/'}
          theme={AppLinkTheme.SECONDARY}
          className={styles.mainLink}
        >
          {t('Главная')}
        </AppLink>
        <AppLink
          to={'/about'}
          theme={AppLinkTheme.SECONDARY}
          className={styles.mainLink}
        >
          {t('О сайте')}
        </AppLink>
      </div>
    </nav>
  )
}
