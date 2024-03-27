import {
  getLanguage,
  getMode,
  getTheme,
  setLanguage,
  setMode,
  setTheme,
} from '@/lib/config';
import { proxy } from 'valtio';

export interface IConfig {
  mode: 'light' | 'dark';
  theme:
    | 'zinc'
    | 'slate'
    | 'stone'
    | 'gray'
    | 'neutral'
    | 'red'
    | 'rose'
    | 'orange'
    | 'green'
    | 'blue'
    | 'yellow'
    | 'violet'
    | string;
  language: string;
}

export const config = proxy<IConfig>({
  mode: getMode(),
  theme: getTheme(),
  language: getLanguage(),
});

export function updateMode(mode: IConfig['mode']) {
  setMode(mode);
  config.mode = mode;
}

export function updateTheme(theme: IConfig['theme']) {
  setTheme(theme);
  config.theme = theme;
}

export function updateLanguage(language: IConfig['language']) {
  setLanguage(language);
  config.language = language;
}
