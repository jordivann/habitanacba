
import 'server-only';

import data from '@/data/properties.json';

import type { AmenityKey } from './property-public';

export {
  AMENITIES,
} from './property-public';

export type {
  AmenityKey,
} from './property-public';

export type Property = {
  id: string;
  legacyId: string;
  slug: string;
  title: string;
  category: string;
  neighborhood: string | null;
  city: string;
  province: string;

  guests: number | null;
  rooms: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  areaM2: number | null;

  featured: boolean;
  legacyActive: boolean;
  published: boolean;

  nightlyRate: number | null;
  legacyNightlyRate: number | null;
  currency: string;

  checkInTime: string | null;
  checkOutTime: string | null;
  minimumNights: number | null;
  depositPercentage: number | null;
  paymentMethods: string[];

  availability: null;
  publicAddress: string | null;

  amenities: AmenityKey[];
  smokingAllowedLegacy: boolean | null;

  summary: string;
  description: string[];
  images: string[];
  videos: string[];

  rules: string[];

  // Información interna recuperada.
  legacyNotes: string | null;

  // Información de estadía editable.
  importantInfo?: string[];

  coordinates: {
    lat: number;
    lng: number;
  } | null;

  legacyColor: string | null;
  pointsOfInterestLegacy: string[];

  dataStatus: 'historical-unverified';
  contentStatus?: 'draft' | 'verified';
};

/**
 * Fuente de datos actual.
 *
 * Más adelante se reemplazará por consultas
 * a Supabase desde el servidor.
 */
export const properties = data as Property[];

/**
 * Propiedades visibles durante el desarrollo.
 *
 * Conservamos el filtro actual para no alterar
 * qué departamentos aparecen en HABITANA.
 */
export const catalogProperties = properties.filter(
  (property) => property.legacyActive
);

/**
 * Obtiene una propiedad por slug.
 */
export function findProperty(
  slug: string
): Property | undefined {
  return catalogProperties.find(
    (property) => property.slug === slug
  );
}
