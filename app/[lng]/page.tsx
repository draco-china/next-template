import ThemeSettings from '@/components/theme-settings';
import { useTranslation } from '@/i18n';
import Mall from './home';

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, 'index');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSettings />
      <h1 className="text-6xl font-bold">{t('title')}</h1>
      <p className="text-2xl">{t('description')}</p>
      <p className="text-2xl">{t('lang')}</p>
      <Mall />
    </main>
  );
}
