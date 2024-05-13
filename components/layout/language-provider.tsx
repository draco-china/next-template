'use client';

import { useConfig } from '@/stores/config';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lng } = useParams<{ lng: string }>();
  const { language, updateLanguage } = useConfig();

  useEffect(() => {
    if (language !== lng) updateLanguage(lng);
  }, [language, lng, updateLanguage]);

  return children;
}
