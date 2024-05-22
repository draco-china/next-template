import { proxy } from 'valtio';
import { DEFAULT_MODE, DEFAULT_SYSTEM_MODE, DEFAULT_THEME, isBrowser } from '@/lib/constants';
import { getCookie, setCookie } from '@/lib/cookies';

export interface GlobalState {
  systemMode?: 'light' | 'dark';
  mode: 'light' | 'dark' | 'system';
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
}

export const globalState = proxy<GlobalState>({
  systemMode: (getCookie('systemMode') || DEFAULT_SYSTEM_MODE) as GlobalState['systemMode'],
  mode: (getCookie('mode') || DEFAULT_MODE) as GlobalState['mode'],
  theme: (getCookie('theme') || DEFAULT_THEME) as GlobalState['theme'],
});

export function getSystemMode() {
  if (isBrowser()) {
    return getCookie('systemMode') || window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return DEFAULT_SYSTEM_MODE;
}

export function formatMode(mode: GlobalState['mode']) {
  return mode === 'system' ? getSystemMode() : mode;
}

export function setMode(mode: GlobalState['mode']) {
  if (globalState.mode !== mode) setCookie('mode', mode);
  globalState.mode = mode;
  const systemMode = formatMode(mode);
  if (globalState.systemMode !== systemMode) setCookie('systemMode', formatMode(systemMode));
  globalState.systemMode = systemMode;
  const el = document.documentElement;
  el.setAttribute('data-mode', globalState.systemMode);
  el.style.colorScheme = globalState.systemMode;
}

export function toggleMode(mode: GlobalState['mode'], coordinate?: { x: number; y: number }) {
  const isDark = document.documentElement.getAttribute('data-mode') === 'dark';
  if (!document.startViewTransition) return setMode(mode);

  const transition = document.startViewTransition(() => setMode(mode));

  // 传入触发点坐标，从点击处开始扩散。否则，从🈶下角开始扩散
  const x = coordinate?.x ?? window.innerWidth;
  const y = coordinate?.y ?? window.innerHeight;

  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
    document.documentElement.animate(
      {
        clipPath: !isDark ? clipPath : [...clipPath].reverse(),
      },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: !isDark ? '::view-transition-new(root)' : '::view-transition-old(root)',
      },
    );
  });
}
