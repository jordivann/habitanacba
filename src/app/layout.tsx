
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

  alternates: {
    canonical: '/',
  },

  robots: {
    index: isPublished,
    follow: isPublished,
  },

  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.habitanacba.com',
    siteName: 'HABITANA',
    title: 'HABITANA | Alquileres temporarios en Córdoba',
    description:
      'Espacios para sentirte en casa. Descubrí nuestros alojamientos temporarios y servicios de gestión en Córdoba capital.',
    images: [
      {
        url: '/og-habitana.jpg',
        width: 1200,
        height: 630,
        alt: 'HABITANA — Alquileres temporarios en Córdoba',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'HABITANA | Alquileres temporarios en Córdoba',
    description:
      'Espacios para sentirte en casa. Alquileres temporarios y gestión de propiedades en Córdoba capital.',
    images: ['/og-habitana.jpg'],
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
