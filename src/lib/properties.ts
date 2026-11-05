
import data from '@/data/properties.json';

export const AMENITIES = {
  wifi: 'Wi-Fi',
  aire: 'Aire acondicionado',
  'ropa-blanca': 'Ropa blanca',
  'pet-friendly': 'Admite mascotas (dato histórico)',
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
  checkInTime: string | null;
  checkOutTime: string | null;
  minimumNights: number | null;
  depositPercentage: number | null;
  paymentMethods: string[];
  availability: null;
  publicAddress: string | null;
  currency: string;
  amenities: AmenityKey[];
  smokingAllowedLegacy: boolean | null;
  summary: string;
  description: string[];
  images: string[];
  videos: string[];
  rules: string[];
  legacyNotes: string | null;
  coordinates: {
    lat: number;
    lng: number;
  } | null;
  legacyColor: string | null;
  pointsOfInterestLegacy: string[];
  dataStatus: 'historical-unverified';
};

export const properties = data as Property[];

export const catalogProperties = properties.filter(
  (property) => property.legacyActive
);

export function findProperty(
  slug: string
): Property | undefined {
  return catalogProperties.find(
    (property) => property.slug === slug
  );
}
