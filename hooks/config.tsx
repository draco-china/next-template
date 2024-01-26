import {
  getLanguage,
  getMode,
  getTheme,
  setLanguage,
  setMode,
  setTheme,
} from '@/lib/config';
import { useTheme } from 'next-themes';
import { proxy, useSnapshot } from 'valtio';

interface IStore {
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

export const store = proxy<IStore>({
  mode: getMode(),
  theme: getTheme(),
  language: getLanguage(),
});

export function updateMode(mode: IStore['mode']) {
  setMode(mode);
  store.mode = mode;
}

export function updateTheme(theme: IStore['theme']) {
  setTheme(theme);
  store.theme = theme;
}

export function updateLanguage(language: IStore['language']) {
  setLanguage(language);
  store.language = language;
}

export default function useConfig() {
  const { mode, theme, language } = useSnapshot(store);
  const { setTheme } = useTheme();
  return {
    mode,
    theme,
    language,
    updateMode: (mode: IStore['mode']) => {
      updateMode(mode);
      setTheme(mode);
    },
    updateTheme,
    updateLanguage,
  };
}
