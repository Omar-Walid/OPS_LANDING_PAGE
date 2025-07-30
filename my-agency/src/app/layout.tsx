// src/app/layout.tsx

import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advertising Agency',
  description: 'A modern landing page for a creative advertising agency.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased scroll-smooth">{children}</body>
    </html>
  );
}
