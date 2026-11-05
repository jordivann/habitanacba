
import type { Property } from './properties';

export const AMENITIES = {
  wifi: 'Wi-Fi',
  aire: 'Aire acondicionado',
  'ropa-blanca': 'Ropa blanca',
  'pet-friendly': 'Admite mascotas',
  balcon: 'Balcón',
  lavarropas: 'Lavarropas',
  estacionamiento: 'Estacionamiento',
  pileta: 'Pileta',
  terraza: 'Terraza',
  parrilla: 'Parrilla',
  calefaccion: 'Calefacción',
  seguridad: 'Seguridad',
  tv: 'Televisión',
  cable: 'TV por cable',
  patio: 'Patio',
  'secador-pelo': 'Secador de pelo',
} as const;

export type AmenityKey = keyof typeof AMENITIES;

/**
 * Información que puede recibir el catálogo.
 *
 * No contiene notas internas, identificadores
 * heredados, tarifas históricas ni datos
 * administrativos.
 */
export type PublicPropertyCard = {
  id: string;
  slug: string;
  title: string;
  category: string;
  neighborhood: string | null;
  city: string;
  guests: number | null;
  summary: string;
  coverImage: string | null;
  amenities: AmenityKey[];
};

/**
 * Transforma una propiedad completa en
 * un objeto público reducido.
 */
export function toPublicPropertyCard(
  property: Property
): PublicPropertyCard {
  return {
    id: property.id,
    slug: property.slug,
    title: property.title,
    category: property.category,
    neighborhood: property.neighborhood,
    city: property.city,
    guests: property.guests,
    summary: property.summary,
    coverImage: property.images[0] ?? null,
    amenities: property.amenities,
  };
}
