import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  CalendarCheck2,
  CalendarClock,
  CreditCard,
  Moon,
  Wallet,
} from 'lucide-react';
import { AMENITIES, catalogProperties, findProperty } from '@/lib/properties';
import { PropertyImage } from '@/components/temporarios/PropertyImage';
import styles from './page.module.css';
import { Reveal } from '@/components/motion/Reveal/Reveal';

type Props = { params: Promise<{ slug: string }> };

type PropertyExtra = {
  importantInfo?: string[];
  publicNotes?: string | null;
};

export function generateStaticParams() {
  return catalogProperties.map((property) => ({ slug: property.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = findProperty(slug);

  return {
    title: property ? `${property.title} | HABITANA` : 'Alojamiento no encontrado',
    description: property?.summary,
    robots: { index: false, follow: false },
  };
}

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = findProperty(slug);
  if (!property) notFound();

  const facts = [
    property.guests != null ? `Hasta ${property.guests} huéspedes` : null,
    property.rooms != null
      ? `${property.rooms} ${property.rooms === 1 ? 'ambiente' : 'ambientes'}`
      : null,
    property.bedrooms != null ? `${property.bedrooms} dormitorios` : null,
    property.bathrooms != null ? `${property.bathrooms} baños` : null,
    property.areaM2 != null ? `${property.areaM2} m²` : null,
  ].filter((fact): fact is string => fact !== null);

  const images = property.images.length
    ? property.images.slice(0, 8)
    : ['/images/temporarios/demo-oliva.jpg'];

  const amenityEntries = property.amenities.filter((key) => key in AMENITIES);
  const extra = property as typeof property & PropertyExtra;
  const importantInfo = extra.importantInfo ?? [];
  const notes = extra.publicNotes;
  const hasConditions = Boolean(
    property.checkInTime || property.checkOutTime ||
    property.minimumNights != null || property.depositPercentage != null ||
    property.paymentMethods.length
  );

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <PropertyImage
            src={images[0]}
            alt={`Portada de ${property.title}`}
            priority
            sizes="100vw"
            className={styles.image}
          />
          <div className={styles.shade} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <Link href="/temporarios" className={styles.back}>
            ← Volver a alojamientos
          </Link>
          <h1 className="serif">{property.title}</h1>
          <p>{[property.neighborhood, property.city].filter(Boolean).join(' · ')}</p>
        </div>
      </section>
      <div className={styles.page}>
        <Reveal delay={0.1}>

        <div className="container">
          <div className={styles.summary}>
            <p className={styles.location}>
              {property.city.toUpperCase()} · {property.province.toUpperCase()}
            </p>
            <div className={styles.facts}>
              {facts.map((fact) => <span key={fact}>{fact}</span>)}
            </div>
          </div>

          <div className={styles.gallery}>
            {images.map((src, index) => (
              <div key={`${src}-${index}`} className={styles.photo}>
                <PropertyImage
                  src={src}
                  sizes={index === 0
                    ? '(max-width: 750px) 100vw, 60vw'
                    : '(max-width: 750px) 50vw, 40vw'}
                  alt={`Fotografía ${index + 1} de ${property.title}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>

          {/* Primera composición: contenido y consulta de disponibilidad. */}
          <div className={styles.columns}>
            <div className={styles.mainContent}>
              <section className={styles.description}>
                <p className={styles.eyebrow}>ACERCA DEL ALOJAMIENTO</p>
                <h2 className="serif">Conocé <em>el espacio.</em></h2>
                {property.description.length > 0
                  ? property.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  : <p>{property.summary}</p>}
              </section>

              {amenityEntries.length > 0 && (
                <Reveal>

                <section className={styles.amenities}>
                  <p className={styles.eyebrow}>COMODIDADES</p>
                  <h2 className="serif">Todo para tu estadía</h2>
                  <div className={styles.tags}>
                    {amenityEntries.map((amenity) => (
                      <span key={amenity}>{AMENITIES[amenity]}</span>
                    ))}
                  </div>
                </section>
                </Reveal>
              )}

              {(importantInfo.length > 0 || notes || property.rules.length > 0) && (
                <Reveal>
                <section className={styles.rules}>
                  <p className={styles.eyebrow}>INFORMACIÓN IMPORTANTE</p>
                  <h2 className="serif">Antes de tu estadía</h2>
                  {notes && <p className={styles.legacyNote}>{notes}</p>}
                  {importantInfo.length > 0 && (
                    <ul className={styles.ruleList}>
                      {importantInfo.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                  )}
                  {property.rules.length > 0 && (
                    <ul className={styles.ruleList}>
                      {property.rules.map((rule, index) => <li key={index}>{rule}</li>)}
                    </ul>
                  )}
                </section>

                </Reveal>
              )}
            </div>

            <aside className={styles.side}>
                <Reveal delay={0.1}>

                    <div className={styles.availability}>
                        <p className={styles.eyebrow}>DISPONIBILIDAD</p>
                        <h2 className="serif">Consultá tu estadía</h2>
                        <p>Elegí las fechas que te interesan y consultanos para coordinar tu visita.</p>
                        <div className={styles.skeleton} aria-hidden="true">
                        {Array.from({ length: 7 }, (_, index) => <span key={index} />)}
                        </div>
                        <Link
                        href={`/contacto?alojamiento=${encodeURIComponent(property.slug)}`}
                        className={styles.contact}
                        >
                        Consultar disponibilidad <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </Reveal>
            </aside>
          </div>

          {/* Segunda composición: usa el ancho completo del contenedor. */}
          {(hasConditions || property.nightlyRate != null) && (
            <div className={styles.bookingInfoLayout}>
              <section className={styles.stayConditions}>
                <div className={styles.sectionHeading}>
                  <p className={styles.eyebrow}>CONDICIONES DE ESTADÍA</p>
                  <h2 className="serif">Todo lo que necesitás <em>saber.</em></h2>
                  <p>Información para organizar tu llegada y disfrutar de tu estadía con tranquilidad.</p>
                </div>

                <div className={styles.conditionsGrid}>
                  {property.checkInTime && (
                    <div className={styles.conditionCard}>
                      <CalendarCheck2 className={styles.conditionIcon} size={23} strokeWidth={1.5} aria-hidden="true" />
                      <span className={styles.conditionLabel}>CHECK-IN</span>
                      <strong className={styles.conditionValue}>{property.checkInTime} hs</strong>
                    </div>
                  )}
                  {property.checkOutTime && (
                    <div className={styles.conditionCard}>
                      <CalendarClock className={styles.conditionIcon} size={23} strokeWidth={1.5} aria-hidden="true" />
                      <span className={styles.conditionLabel}>CHECK-OUT</span>
                      <strong className={styles.conditionValue}>{property.checkOutTime} hs</strong>
                    </div>
                  )}
                  {property.minimumNights != null && (
                    <div className={styles.conditionCard}>
                      <Moon className={styles.conditionIcon} size={23} strokeWidth={1.5} aria-hidden="true" />
                      <span className={styles.conditionLabel}>ESTADÍA MÍNIMA</span>
                      <strong className={styles.conditionValue}>
                        {property.minimumNights} {property.minimumNights === 1 ? 'noche' : 'noches'}
                      </strong>
                    </div>
                  )}
                  {property.depositPercentage != null && (
                    <div className={styles.conditionCard}>
                      <Wallet className={styles.conditionIcon} size={23} strokeWidth={1.5} aria-hidden="true" />
                      <span className={styles.conditionLabel}>SEÑA PARA RESERVAR</span>
                      <strong className={styles.conditionValue}>{property.depositPercentage}%</strong>
                    </div>
                  )}
                </div>

                {property.paymentMethods.length > 0 && (
                  <div className={styles.paymentCard}>
                    <CreditCard size={25} strokeWidth={1.5} aria-hidden="true" />
                    <div>
                      <span>Medios de pago</span>
                      <p>{property.paymentMethods.join(' · ')}</p>
                    </div>
                  </div>
                )}
              </section>

              <Reveal>

              <section className={styles.ratesSection}>
                <div className={styles.rateCard}>
                  <p className={styles.rateEyebrow}>TARIFA POR NOCHE</p>
                  {property.nightlyRate != null ? (
                    <>
                      <div className={styles.rateAmount}>
                        <strong>{formatCurrency(property.nightlyRate, property.currency)}</strong>
                        <span>/ noche</span>
                      </div>
                      <p className={styles.rateDescription}>
                        El importe final puede variar según las fechas seleccionadas y la duración de la estadía.
                      </p>
                    </>
                  ) : (
                    <p className={styles.rateDescription}>
                      Consultanos para conocer las tarifas de este alojamiento.
                    </p>
                  )}
                  <Link
                    href={`/contacto?alojamiento=${encodeURIComponent(property.slug)}`}
                    className={styles.rateLink}
                  >
                    Consultar por este alojamiento <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </section>
              </Reveal>

            </div>
          )}
        </div>
        </Reveal>
      </div>

      <section className={styles.more}>
        <div className="container">
          <p>SEGUÍ EXPLORANDO</p>
          <h2 className="serif">Encontrá tu próximo lugar.</h2>
          <Link href="/temporarios">Ver todos los alojamientos ↗</Link>
        </div>
      </section>
    </>
  );
}
