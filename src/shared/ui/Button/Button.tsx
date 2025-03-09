import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { FC, ButtonHTMLAttributes } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = props => {
  const { className, children, theme, ...other } = props

  return (
    <button
      className={classNames(styles.button, {}, [className, styles[theme]])}
      {...other}
    >
      {children}
    </button>
  )
}
