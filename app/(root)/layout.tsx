import type { Metadata } from 'next';
import '@/app/globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { Work_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'YC Directory',
  description: 'Pitch Starup',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${workSans.variable} antialiased`}
      >
        <Navbar />
        <main className='font-work-sans'>{children}</main>
      </body>
    </html>
  );
}
