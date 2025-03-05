import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={styles.mainLink}>
          Главная
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
          О нас
        </AppLink>
      </div>
    </nav>
  )
}
