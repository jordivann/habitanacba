
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  // Genera un sitio estático para Cloudflare Pages.
  output: 'export',

  // Genera carpetas con index.html para cada ruta.
  trailingSlash: true,

  // Evita depender del optimizador de imágenes de Next.js.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
