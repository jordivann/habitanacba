
'use client';

import { useMemo, useState } from 'react';

import {
  AMENITIES,
  type AmenityKey,
  type Property,
} from '@/lib/properties';

import { PropertyCard } from './PropertyCard';
import styles from './Catalog.module.css';
import { Reveal } from '../motion/Reveal/Reveal';

type CatalogProps = {
  properties: Property[];
};

const quickAmenities: AmenityKey[] = [
  'wifi',
  'aire',
  'balcon',
  'estacionamiento',
  'pileta',
  'pet-friendly',
];

export function Catalog({ properties }: CatalogProps) {
  const [zone, setZone] = useState('Todas las zonas');
  const [guests, setGuests] = useState('1');
  const [amenities, setAmenities] = useState<AmenityKey[]>([]);

  const neighborhoods = useMemo(
    () => [
      'Todas las zonas',
      ...Array.from(
        new Set(
          properties
            .map((property) => property.neighborhood)
            .filter((value): value is string => Boolean(value))
        )
      ).sort((a, b) => a.localeCompare(b, 'es')),
    ],
    [properties]
  );

  const visible = useMemo(() => {
    return properties.filter((property) => {
      const matchesZone =
        zone === 'Todas las zonas' ||
        property.neighborhood === zone;

      const matchesGuests =
        (property.guests ?? 0) >= Number(guests);

      const matchesAmenities = amenities.every(
        (amenity) => property.amenities.includes(amenity)
      );

      return matchesZone && matchesGuests && matchesAmenities;
    });
  }, [properties, zone, guests, amenities]);

  function resetFilters() {
    setZone('Todas las zonas');
    setGuests('1');
    setAmenities([]);
  }

  function toggleAmenity(amenity: AmenityKey) {
    setAmenities((current) =>
      current.includes(amenity)
        ? current.filter((item) => item !== amenity)
        : [...current, amenity]
    );
  }

  const hasActiveFilters =
    zone !== 'Todas las zonas' ||
    guests !== '1' ||
    amenities.length > 0;

  return (
    <section
      className={styles.section}
      aria-labelledby="catalog-title"
    >
      <div className="container">
        <Reveal delay={0.02}>

            <div className={styles.head}>
            <div>
                <p className={styles.eyebrow}>
                ESTADÍAS EN CÓRDOBA CAPITAL
                </p>

                <h1
                id="catalog-title"
                className={`serif ${styles.title}`}
                >
                Encontrá tu lugar <em>en la ciudad.</em>
                </h1>

                <p>
                Descubrí los espacios de HABITANA y encontrá
                el alojamiento que mejor se adapte a tu estadía.
                </p>
            </div>

            <div className={styles.note}>
                Departamentos ·
                Consulte <a href="https://wa.me/5493511231243" target="_blank" rel="noopener noreferrer">disponibilidad</a>
            </div>
            </div>
        </Reveal>

        <Reveal delay={0.02}>

            <div
            className={styles.filters}
            role="group"
            aria-label="Filtros de alojamientos"
            >
            <label>
                <span>Zona</span>

                <select
                value={zone}
                onChange={(event) => setZone(event.target.value)}
                >
                {neighborhoods.map((neighborhood) => (
                    <option
                    key={neighborhood}
                    value={neighborhood}
                    >
                    {neighborhood}
                    </option>
                ))}
                </select>
            </label>

            <label>
                <span>Huéspedes</span>

                <select
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
                >
                {[1, 2, 3, 4].map((number) => (
                    <option key={number} value={number}>
                    {number}{' '}
                    {number === 1 ? 'persona' : 'personas'}
                    </option>
                ))}
                </select>
            </label>

            <div className={styles.coming}>
                <span>Ingreso y salida</span>
                <strong>Disponibilidad próximamente</strong>
            </div>
            </div>
        </Reveal>

        <Reveal>

            <div
            className={styles.chips}
            role="group"
            aria-label="Filtrar por comodidades"
            >
            {quickAmenities.map((amenity) => {
                const selected = amenities.includes(amenity);

                return (
                <button
                    key={amenity}
                    type="button"
                    aria-pressed={selected}
                    className={selected ? styles.active : ''}
                    onClick={() => toggleAmenity(amenity)}
                >
                    {AMENITIES[amenity]}
                </button>
                );
            })}

            {hasActiveFilters && (
                <button
                type="button"
                className={styles.reset}
                onClick={resetFilters}
                >
                Limpiar filtros
                </button>
            )}
            </div>
        </Reveal>
        <Reveal>
            <div className={styles.results} aria-live="polite">
            <span>
                {visible.length}{' '}
                {visible.length === 1
                ? 'alojamiento encontrado'
                : 'alojamientos encontrados'}
            </span>

            <span>Tarifas y disponibilidad por confirmar</span>
            </div>

        </Reveal>

        <Reveal>
            {visible.length > 0 ? (
            <div className={styles.grid}>
                {visible.map((property) => (
                    <Reveal delay={0.2}>
                        <PropertyCard
                            key={property.id}
                            property={property}
                        />

                    </Reveal>   
                ))}
            </div>
            ) : (
            <div className={styles.empty}>
                <h2 className="serif">
                No encontramos coincidencias.
                </h2>

                <p>
                Probá seleccionando otra zona o quitando
                algunas comodidades.
                </p>

                <button
                type="button"
                onClick={resetFilters}
                >
                Ver todos los alojamientos
                </button>
            </div>
            )}
        </Reveal>
      </div>
    </section>
  );
}
