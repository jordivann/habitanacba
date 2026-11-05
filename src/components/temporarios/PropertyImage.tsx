
'use client';

import { useState } from 'react';
import Image from 'next/image';

type PropertyImageProps = {
  src?: string | null;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

const FALLBACK_IMAGE = '/images/temporarios/demo-oliva.jpg';

/**
 * Admite:
 *
 * 1. Imágenes locales en /public:
 *    /images/temporarios/departamento.jpg
 *
 * 2. Imágenes externas:
 *    https://proyecto.supabase.co/storage/...
 *
 * 3. Valores vacíos o incorrectos:
 *    utiliza la imagen de respaldo.
 */
function normalizeImageSource(
  value?: string | null
): string {
  if (!value || typeof value !== 'string') {
    return FALLBACK_IMAGE;
  }

  const source = value.trim();

  // Archivos locales servidos desde /public.
  if (
    source.startsWith('/') &&
    !source.startsWith('//')
  ) {
    return source;
  }

  // Imágenes externas, como Supabase Storage.
  if (source.startsWith('https://')) {
    return source;
  }

  return FALLBACK_IMAGE;
}

export function PropertyImage({
  src,
  alt,
  className,
  sizes = '100vw',
  priority = false,
}: PropertyImageProps) {
  const requestedSource = normalizeImageSource(src);

  const [failedSource, setFailedSource] = useState<
    string | null
  >(null);

  const imageSource =
    failedSource === requestedSource
      ? FALLBACK_IMAGE
      : requestedSource;

  const isFallback = imageSource === FALLBACK_IMAGE;

  return (
    <Image
      key={imageSource}
      src={imageSource}
      alt={
        isFallback
          ? 'Imagen ilustrativa del alojamiento'
          : alt
      }
      fill
      sizes={sizes}
      priority={priority}
      unoptimized
      className={className}
      onError={() => {
        if (!isFallback) {
          setFailedSource(requestedSource);
        }
      }}
    />
  );
}
