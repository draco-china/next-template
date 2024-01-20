'use client';

import { Skeleton } from '@/components/ui/skeleton';
import request from '@/lib/request';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';

function IPComponent(props: { wait: number }) {
  const { data } = useSuspenseQuery({
    queryKey: ['ipip'],
    queryFn: async () => {
      const res = await request(`https://myip.ipip.net/json`).then(
        (res) => res,
      );
      return res.data.data;
    },
  });
  const Index = data.location.findIndex((item: string) => item === '');
  return (
    <ul className="flex gap-4">
      <li>IP: {data.ip}</li>
      <li>地址: {data.location.slice(0, Index).join()}</li>
      <li>运营商: {data.location[Index + 1]}</li>
    </ul>
  );
}

export default function Mall() {
  return (
    <Suspense
      fallback={
        <div className="flex gap-4 *:h-6 *:w-52 *:rounded-full">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      }
    >
      <IPComponent wait={1000} />
    </Suspense>
  );
}
