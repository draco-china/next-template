'use client';

import useConfig from '@/hooks/config';
import { cn } from '@/lib/utils';
import { CheckIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Icon from '../../components/Icon';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui/popover';

// 'zinc', 'slate', 'stone', 'gray', 'neutral', 'red', 'rose', 'orange', 'green', 'blue', 'yellow', 'violet'
const themes = [
  {
    label: 'Zinc',
    value: 'zinc',
    className: 'bg-zinc-600',
  },
  {
    label: 'Slate',
    value: 'slate',
    className: 'bg-slate-600',
  },
  {
    label: 'Stone',
    value: 'stone',
    className: 'bg-stone-600',
  },
  {
    label: 'Gray',
    value: 'gray',
    className: 'bg-gray-600',
  },
  {
    label: 'Neutral',
    value: 'neutral',
    className: 'bg-neutral-600',
  },
  {
    label: 'Red',
    value: 'red',
    className: 'bg-red-600',
  },
  {
    label: 'Rose',
    value: 'rose',
    className: 'bg-rose-600',
  },
  {
    label: 'Orange',
    value: 'orange',
    className: 'bg-orange-600',
  },
  {
    label: 'Green',
    value: 'green',
    className: 'bg-green-600',
  },
  {
    label: 'Blue',
    value: 'blue',
    className: 'bg-blue-600',
  },
  {
    label: 'Yellow',
    value: 'yellow',
    className: 'bg-yellow-600',
  },
  {
    label: 'Violet',
    value: 'violet',
    className: 'bg-violet-600',
  },
];

export default function ThemeSettings() {
  const { mode, theme, language, updateMode, updateTheme, updateLanguage } =
    useConfig();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Icon icon="mdi:theme-light-dark" className="mr-2 size-4" />
          Config
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-1.5">
          <Label className="text-xs">Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((item) => (
              <Button
                key={item.value}
                variant="outline"
                className={cn('justify-start')}
                onClick={() => updateTheme(item.value)}
              >
                <span
                  data-theme={theme}
                  className={cn(
                    'mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full ',
                    item.className,
                  )}
                >
                  {theme === item.value && (
                    <CheckIcon className="size-4 text-white" />
                  )}
                </span>
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Mode</Label>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant={'outline'}
                size="sm"
                onClick={() => updateMode('light')}
                className={cn(mode === 'light' && 'border-2 border-primary')}
              >
                <SunIcon className="mr-1 -translate-x-1" />
                Light
              </Button>
              <Button
                variant={'outline'}
                size="sm"
                onClick={() => updateMode('dark')}
                className={cn(mode === 'dark' && 'border-2 border-primary')}
              >
                <MoonIcon className="mr-1 -translate-x-1" />
                Dark
              </Button>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Language</Label>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant={'outline'}
                size="sm"
                onClick={() => updateLanguage('zh-CN')}
                className={cn(
                  language === 'zh-CN' && 'border-2 border-primary',
                )}
                asChild
              >
                <Link href="/zh-CN">中文</Link>
              </Button>
              <Button
                variant={'outline'}
                size="sm"
                onClick={() => updateLanguage('en-US')}
                className={cn(
                  language === 'en-US' && 'border-2 border-primary',
                )}
                asChild
              >
                <Link href="/en-US">English</Link>
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
