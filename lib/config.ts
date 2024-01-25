import { fallbackLng, languages } from '@/i18n/settings';
import { getCookie, setCookie } from './cookies';
import { isBrowser } from './utils';

export function getMode() {
  return getCookie('mode') || 'dark';
}

export function setMode(mode: string) {
  setCookie('mode', mode);
  if (isBrowser) {
    document.documentElement.setAttribute('data-mode', mode);
  }
}

export function getTheme() {
  return getCookie('theme') || 'violet';
}

export function setTheme(theme: string) {
  setCookie('theme', theme);
  if (isBrowser) {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

export function getLanguage() {
  let language = getCookie('language');
  if (!language) {
    let lang: string;
    if (isBrowser) {
      lang = navigator?.language.split(',')[0];
    } else {
      const headers = require('next/headers').headers;
      lang = headers().get('Accept-Language')?.split(',')[0];
    }
    if (lang) {
      if (languages.includes(lang)) {
        language = lang;
      } else if (!lang?.includes('-')) {
        language = languages.find((l) => l.split('-')[0] === lang);
      }
    }
  }
  return language || fallbackLng;
}

export function setLanguage(language: string) {
  setCookie('language', language);
  if (isBrowser) {
    document.documentElement.setAttribute('lang', language);
  }
}
