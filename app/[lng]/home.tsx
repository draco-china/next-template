'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { useTranslation } from '@/i18n/client';
import request from '@/lib/request';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Suspense } from 'react';
import { toast } from 'sonner';

function TranslateComponent() {
  const { lng } = useParams<{ lng: string }>();
  const { t } = useTranslation(lng);
  return (
    <>
      <li>客户端 - 国际化</li>
      <li>{t('title')}</li>
      <li>{t('description')}</li>
      <li>{t('lang')}</li>
    </>
  );
}

function IPComponent() {
  const { data } = useSuspenseQuery({
    queryKey: ['ip'],
    queryFn: async () => {
      const res = await request(`https://www.ip.cn/api/index?ip=&type=0`).then(
        (res) => res,
      );
      return res.data;
    },
  });
  return (
    <ul className="flex flex-col gap-4">
      <li
        onClick={() => {
          toast.warning('Warning');
          toast.success('Success');
          toast.error('Error');
          toast.info('Info');
          toast.loading('Loading');
          toast.message('Message');
        }}
      >
        IP: {data.ip}
      </li>
      <li>地址: {data.address}</li>
      <TranslateComponent />
    </ul>
  );
}

export default function Mall() {
  return (
    <Suspense
      fallback={
        <ul className="flex flex-col gap-4 *:h-6 *:w-52 *:rounded-full">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </ul>
      }
    >
      <IPComponent />
    </Suspense>
  );
}
