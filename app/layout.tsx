import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Noto_Sans as FontSans } from 'next/font/google';
import ReactQueryProvider from './providers/ReactQuery';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export { metadata, viewport } from '../config/meta';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="renderer" content="webkit" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
