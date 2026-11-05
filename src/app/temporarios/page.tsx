
import type { Metadata } from 'next';

import { Catalog } from '@/components/temporarios/Catalog';
import { Reveal } from '@/components/motion/Reveal/Reveal';

import { catalogProperties } from '@/lib/properties';
import { toPublicPropertyCard } from '@/lib/property-public';

export const metadata: Metadata = {
  title: 'Alquileres temporarios en Córdoba',
  description:
    'Explorá los alojamientos temporarios de HABITANA en Córdoba capital. Departamentos pensados para disfrutar cada estadía con comodidad y calidez.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function TemporariosPage() {
  // Solo enviamos al catálogo la información pública.
  const publicProperties = catalogProperties.map(
    toPublicPropertyCard
  );

  return (
    <Reveal>
      <Catalog properties={publicProperties} />
    </Reveal>
  );
}
