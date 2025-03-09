import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

export function Loader({ className }: LoaderProps) {
  return <div className={classNames(styles.loader, {}, [className])}></div>
}
