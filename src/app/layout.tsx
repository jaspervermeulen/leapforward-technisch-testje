import { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const onest = localFont({
  src: './onest.ttf',
  display: 'swap',
  variable: '--font-onest',
});

export const metadata: Metadata = {
  title: 'Kansstad - Leer over beroepen door te spelen',
  description:
    'Welkom in Kansstad: Een virtueel spel waarin je kennis kan opdoen rond heel wat interessante beroepen. Begin er meteen aan.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
