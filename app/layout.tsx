import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Analytics from '@/components/Analytics';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Step by Step ASD | Scuola di Danza Rovigo',
  description:
    'Step by Step ASD - Scuola di danza a Rovigo. Corsi per adulti, bambini e disabilità. Be Yourself.',
  verification: {
    google: 'hlUEuvKL3PO3em9W97kAl4oUHZ3NDdnTSPqWQ2La0T0',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={poppins.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
