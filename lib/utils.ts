import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isBrowser =
  typeof window !== 'undefined' || process.env.OUTPUT === 'export';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';
export const API_URL = process.env.API_URL || 'http://localhost:3000';
export const ANALYTICS = {
  baidu: process.env.BAIDU || '',
  google: process.env.GOOGLE || '',
  yandex: process.env.YANDEX || '',
  facebook: process.env.FACEBOOK || '',
};
