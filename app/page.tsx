import { languages } from '@/i18n/settings';
import { getLanguage, setLanguage } from '@/lib/config';
import { redirect } from 'next/navigation';

export default function RootPage() {
  const lang = getLanguage();
  if (languages.includes(lang)) {
    // 忽略仅在服务器操作或路由处理程序中可用
    try {
      setLanguage(lang);
    } catch (error) {}
    redirect(`/${lang}`);
  }
  return null;
}
