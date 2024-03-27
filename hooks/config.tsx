import {
  IConfig,
  config,
  updateLanguage,
  updateMode,
  updateTheme,
} from '@/stores/config';
import { useTheme } from 'next-themes';
import { useSnapshot } from 'valtio';

export default function useConfig() {
  const { mode, theme, language } = useSnapshot(config);
  const { setTheme } = useTheme();
  return {
    mode,
    theme,
    language,
    updateMode: (mode: IConfig['mode']) => {
      updateMode(mode);
      setTheme(mode);
    },
    updateTheme,
    updateLanguage,
  };
}
