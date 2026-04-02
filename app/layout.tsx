import type { Metadata } from 'next';
import { Josefin_Sans, Montserrat, Source_Sans_3 } from 'next/font/google';

import './globals.css';

const heading = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap'
});

const body = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const accent = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'MOSAROMA | Premium Outdoor Living',
  description: 'MOSAROMA vereint hochwertige Outdoor-Textilien und kuratierte Wohnwelten für stilvolle Außenbereiche.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${heading.variable} ${body.variable} ${accent.variable}`}>
      <body>{children}</body>
    </html>
  );
}
