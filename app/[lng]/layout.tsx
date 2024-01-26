import ReactQueryProvider from '@/app/components/react-query-provide';
import Scripts from '@/app/components/scripts';
import ThemeProvider from '@/app/components/theme-provide';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Toaster } from '@/components/ui/sonner';
import { languages } from '@/i18n/settings';
import { getMode, getTheme } from '@/lib/config';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { dir } from 'i18next';
import { Noto_Sans as FontSans } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export { metadata, viewport } from '@/lib/meta';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html
      lang={lng}
      data-mode={getMode()}
      data-theme={getTheme()}
      dir={dir(lng)}
      suppressHydrationWarning
    >
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <Scripts />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ReactQueryProvider>
          <ThemeProvider attribute="data-mode" defaultTheme={getMode()}>
            <ScrollArea className="h-dvh max-h-screen w-dvw max-w-full">
              {children}
            </ScrollArea>
            <Toaster closeButton richColors visibleToasts={9} />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
