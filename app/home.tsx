'use client';

import { Skeleton } from '@/components/ui/skeleton';
import request from '@/lib/request';
import { getBaseURL } from '@/lib/utils';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';

function Component(props: { wait: number }) {
  const { data } = useSuspenseQuery({
    queryKey: ['wait', props.wait],
    queryFn: async () => {
      const path = `/api/wait?wait=${props.wait}`;
      const url = getBaseURL() + path;
      const res = await request(url).then((res) => res);
      return res.data;
    },
  });
  return <div>{data}</div>;
}

export default function Mall() {
  return (
    <Suspense
      fallback={<Skeleton className="h-[20px] w-[100px] rounded-full" />}
    >
      <Component wait={1000} />
    </Suspense>
  );
}
