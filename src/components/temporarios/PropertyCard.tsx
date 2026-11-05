
import Link from 'next/link';

import type { Property } from '@/lib/properties';

import { PropertyImage } from './PropertyImage';
import styles from './PropertyCard.module.css';

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({
  property,
}: PropertyCardProps) {
  const href = `/temporarios/${property.slug}`;

  const location = [
    property.neighborhood || 'Zona por confirmar',
    property.city,
  ].join(' · ');

  const capacity =
    property.guests != null
      ? `Hasta ${property.guests} ${
          property.guests === 1 ? 'huésped' : 'huéspedes'
        }`
      : 'Capacidad por confirmar';

  return (
    <article className={styles.card}>
      <Link
        href={href}
        className={styles.imageLink}
        aria-label={`Conocer ${property.title}`}
      >
        <PropertyImage
          src={property.images[0]}
          alt={`Fotografía de ${property.title}`}
          sizes="(max-width: 680px) 100vw, (max-width: 1040px) 50vw, 33vw"
          className={styles.image}
        />

      </Link>

      <div className={styles.body}>
        <div className={styles.heading}>
          <h3 className="serif">
            <Link href={href}>
              {property.title}
            </Link>
          </h3>

          <span>{property.category}</span>
        </div>

        <p className={styles.place}>{location}</p>

        <p className={styles.summary}>
          {property.summary}
        </p>

        <div className={styles.bottom}>
          <div>
            <small>Capacidad</small>
            <strong>{capacity}</strong>
          </div>

          <Link
            className={styles.arrow}
            href={href}
            aria-label={`Ver detalles de ${property.title}`}
          >
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
