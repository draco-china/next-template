import { languages } from '@/i18n/settings';
import { getLanguage } from '@/lib/config';
import { redirect } from 'next/navigation';

export default function RootPage({ children }: { children: React.ReactNode }) {
  const lang = getLanguage();
  if (languages.includes(lang)) redirect(`/${lang}`);
  return children;
}
