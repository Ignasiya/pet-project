import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export type ThemeContetxProps = {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContetxProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
