import { Chatbot } from '@/components/Chatbot';
import { Metadata } from 'next';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Blog - Thoughts & Learnings',
  description:
    'Thoughts on web development, AI integration, and learnings from open-source contributions.',
  authors: [{ name: 'Darshan Rajput', url: 'http://localhost:3000/' }],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Chatbot />
    </>
  );
}
