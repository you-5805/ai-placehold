import type { PropsWithChildren } from 'react';
import '@/styles/global.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
