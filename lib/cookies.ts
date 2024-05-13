import Cookies from 'js-cookie';
import { isBrowser } from './utils';

export function getCookie(name: string) {
  if (isBrowser) {
    return Cookies.get(name);
  }
  const cookies = require('next/headers').cookies;
  return cookies().get(name)?.value;
}

export function setCookie(name: string, value: string) {
  if (isBrowser) {
    Cookies.set(name, value, { path: '/' });
  } else {
    const cookies = require('next/headers').cookies;
    cookies().set(name, value, { path: '/' });
  }
}

export function removeCookie(name: string) {
  if (isBrowser) {
    Cookies.remove(name);
  } else {
    const cookies = require('next/headers').cookies;
    cookies().delete(name);
  }
}
