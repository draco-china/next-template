import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className='container grid h-fit grid-cols-3 gap-6 py-6'>
      {[...new Array(9).fill('')].map((item, index) => {
        return (
          <Skeleton key={index} className='rounded-xl *:p-6'>
            <div className='flex flex-col space-y-1.5'>
              <Skeleton className='h-4' />
              <Skeleton className='h-5' />
            </div>
            <div className='flex justify-between pt-0 *:h-9 *:w-24'>
              <Skeleton />
              <Skeleton />
            </div>
          </Skeleton>
        );
      })}
    </div>
  );
}
