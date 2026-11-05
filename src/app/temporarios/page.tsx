
import type { Metadata } from 'next';

import { Catalog } from '@/components/temporarios/Catalog';
import { catalogProperties } from '@/lib/properties';
import { Reveal } from '@/components/motion/Reveal/Reveal';

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
  return (<>
  <Reveal>
    <Catalog properties={catalogProperties} />;

  </Reveal>
  </>)
}
