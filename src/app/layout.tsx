import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/provider/providers';
import { PreloadAvatar } from '@/components/PreloadAvatar';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Darshan Rajput',
  description: "Darshan Rajput's personal portfolio website.",
  authors: [{ name: 'Darshan Rajput', url: 'http://localhost:3000/' }],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Darshan Rajput',
    description: "Darshan Rajput's personal portfolio website.",
    type: 'website',
    url: 'http://localhost:3000/',
    images: [
      {
        url: '/avatar.png',
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/avatar.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <PreloadAvatar />
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
