import { getLanguage } from '@/lib/config';
import { redirect } from 'next/navigation';

export default function RootPage() {
  const lang = getLanguage();
  return redirect(`/${lang}`);
}
