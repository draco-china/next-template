'use client';

import Link from 'next/link';
import { Share1Icon, StarIcon } from '@radix-ui/react-icons';
import { useSuspenseQuery } from '@tanstack/react-query';
import request from '@/lib/request';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Projects() {
  const { data } = useSuspenseQuery({
    queryKey: ['draco-china'],
    queryFn: async () => {
      const res = await request(
        `https://api.github.com/users/draco-china/repos?type=&sort=&direction=&per_page=&page=`,
      );
      return res.data || [];
    },
  });
  return (
    <div className='container grid grid-cols-3 gap-6 py-6'>
      {data?.map((item: any) => {
        return (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>标题</CardTitle>
              <CardDescription className='truncate'>描述</CardDescription>
            </CardHeader>
            <CardFooter className='flex justify-between'>
              <Button variant='outline'>
                <Share1Icon className='mr-2' />
                <Link href={item.forks_url}> Fork {item.forks_count}</Link>
              </Button>
              <Button variant='outline'>
                <StarIcon className='mr-2' />
                <Link href={item.stargazers_url}>Star {item.stargazers_count}</Link>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
