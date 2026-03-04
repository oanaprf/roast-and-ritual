import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Roast & Ritual — Handcrafted Coffee',
  description:
    'Slow mornings, bold roasts, and the kind of warmth you carry with you all day. Visit Roast & Ritual for single-origin coffee crafted with care.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
