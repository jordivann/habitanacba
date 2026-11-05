
import type { Metadata, Viewport } from 'next';
import { Caveat } from 'next/font/google';

import './globals.css';

import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { isPublished, site } from '@/lib/site';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'HABITANA | Gestión y alquileres temporarios',
    template: '%s | HABITANA',
  },
  description: site.description,
  applicationName: site.name,
  robots: {
    index: isPublished,
    follow: isPublished,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: site.name,
    title: 'HABITANA | Gestión y alquileres temporarios',
    description: site.description,
    url: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: '#F5F1EB',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={caveat.variable}>
      <body>
        <a className="skipLink" href="#contenido">
          Saltar al contenido
        </a>

        <Header />

        <main id="contenido">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
