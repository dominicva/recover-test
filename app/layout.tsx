import { Hanken_Grotesk } from 'next/font/google';
import Header from '@/components/Header';
// import { NextAuthProvider } from './providers';
import NextAuthProvider from '@/components/Provider';
import type { Metadata } from 'next';
import './globals.css';

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Recover',
  description: 'An AI-assisted mood tracker to help you move past addiction.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
