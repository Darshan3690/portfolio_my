import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/provider/providers';
import { PreloadAvatar } from '@/components/PreloadAvatar';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Darshan Rajput | AI-focused Full Stack Developer',
  description:
    'Darshan Rajput is an AI-focused full stack developer, open-source maintainer, and builder of LLM-powered applications, voice agents, and automation systems.',
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
    title: 'Darshan Rajput | AI-focused Full Stack Developer',
    description:
      'AI-focused full stack developer building LLM-powered applications, voice agents, and automation systems.',
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
