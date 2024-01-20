import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBaseURL() {
  // if (process.env.API_URL) {
  //   return `https://${process.env.API_URL}`;
  // }
  // if (process.env.NODE_ENV === 'production') {
  //   return 'http://localhost:3000';
  // }
  return 'http://localhost:3000';
}
