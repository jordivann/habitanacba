
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  House,
  Luggage,
  MapPin,
  MessageCircle,
  HeartHandshake,
} from 'lucide-react';

import { Reveal } from '@/components/motion/Reveal/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contacto | Hablemos',
  description:
    'Contactate con HABITANA en Córdoba. Consultá por alojamientos temporarios o por nuestro servicio de gestión de propiedades.',
};

// Número utilizado actualmente en el catálogo de Temporarios.
const WHATSAPP_NUMBER = '5493511231243';

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

const ownerMessage = whatsappLink(
  '¡Hola! Soy propietario/a y me gustaría conocer el servicio de gestión de alquileres temporarios de HABITANA.'
);

const guestMessage = whatsappLink(
  '¡Hola! Estoy buscando un alojamiento temporario en Córdoba y quisiera hacer una consulta.'
);

const generalMessage = whatsappLink(
  '¡Hola! Me gustaría comunicarme con HABITANA.'
);

export default function ContactoPage() {
  return (
    <>
      {/* HERO */}

      <section
        className={styles.hero}
        aria-labelledby="contact-title"
      >
        <div className={`container ${styles.heroInner}`}>
          <Reveal immediate>
            <p className={styles.eyebrow}>
              HABITANA / CONTACTO
            </p>

            <h1
              id="contact-title"
              className={`serif ${styles.heroTitle}`}
            >
              Siempre hay una buena razón
              <em> para empezar una conversación.</em>
            </h1>

            <p className={styles.heroLead}>
              Estamos para acompañarte, ya sea que busques
              un lugar donde alojarte o quieras confiar
              la gestión de tu propiedad.
            </p>

            <a
              href={generalMessage}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroButton}
            >
              <MessageCircle
                size={19}
                strokeWidth={1.7}
                aria-hidden="true"
              />
              Hablemos por WhatsApp
              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <span
          className={styles.heroShape}
          aria-hidden="true"
        />
      </section>

      {/* DOS CAMINOS DE CONTACTO */}

      <section
        className={styles.paths}
        aria-labelledby="paths-title"
      >
        <div className="container">
          <Reveal>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>
                ¿CÓMO PODEMOS AYUDARTE?
              </p>

              <h2
                id="paths-title"
                className={`serif ${styles.sectionTitle}`}
              >
                Contanos <em>qué necesitás.</em>
              </h2>

              <p>
                Cada consulta es diferente. Elegí la opción
                que mejor se adapte a lo que estás buscando.
              </p>
            </div>
          </Reveal>

          <div className={styles.pathsGrid}>
            <Reveal
              direction="left"
              className={styles.pathReveal}
              delay={0.05}
            >
              <article
                className={`${styles.pathCard} ${styles.ownerCard}`}
              >
                <div className={styles.pathIcon}>
                  <House
                    size={29}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </div>

                <p className={styles.pathNumber}>
                  01 / PROPIETARIOS
                </p>

                <h3 className="serif">
                  Tu propiedad,
                  <br />
                  <em>en buenas manos.</em>
                </h3>

                <p className={styles.pathDescription}>
                  Si tenés un departamento y querés conocer
                  cómo podemos acompañarte con su gestión
                  de alquileres temporarios, nos encantará
                  escucharte.
                </p>

                <div className={styles.pathActions}>
                  <a
                    href={ownerMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pathButton}
                  >
                    Consultar por WhatsApp
                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                    />
                  </a>

                  <Link
                    href="/servicios"
                    className={styles.secondaryLink}
                  >
                    Conocer el servicio
                  </Link>
                </div>
              </article>
            </Reveal>

            <Reveal
              direction="right"
              className={styles.pathReveal}
              delay={0.13}
            >
              <article
                className={`${styles.pathCard} ${styles.guestCard}`}
              >
                <div className={styles.pathIcon}>
                  <Luggage
                    size={29}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </div>

                <p className={styles.pathNumber}>
                  02 / HUÉSPEDES
                </p>

                <h3 className="serif">
                  Tu próxima estadía
                  <br />
                  <em>empieza acá.</em>
                </h3>

                <p className={styles.pathDescription}>
                  ¿Estás planificando una visita a Córdoba?
                  Escribinos y contanos qué tipo de alojamiento
                  estás buscando. Queremos ayudarte a encontrar
                  un espacio para sentirte como en casa.
                </p>

                <div className={styles.pathActions}>
                  <a
                    href={guestMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pathButton}
                  >
                    Consultar por WhatsApp
                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                    />
                  </a>

                  <Link
                    href="/temporarios"
                    className={styles.secondaryLink}
                  >
                    Explorar alojamientos
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACTO DIRECTO */}

      <section
        className={styles.directContact}
        aria-labelledby="direct-title"
      >
        <div className={`container ${styles.directGrid}`}>
          <Reveal direction="left">
            <div className={styles.directIntro}>
              <p className={styles.eyebrow}>
                ESTAMOS CERCA
              </p>

              <h2
                id="direct-title"
                className={`serif ${styles.sectionTitle}`}
              >
                Nos gusta hablar
                <br />
                <em>de persona a persona.</em>
              </h2>

              <p>
                Detrás de HABITANA estamos Cecilia y Lourdes.
                Nos importa que puedas comunicarte con
                nosotras de manera simple y cercana.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.12}>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.detailIcon}>
                  <MessageCircle
                    size={23}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span className={styles.detailLabel}>
                    NUESTRO WHATSAPP
                  </span>

                  <a
                    href={generalMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.detailValue}
                  >
                    +54 9 351 123-1243
                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                    />
                  </a>

                  <p>
                    Escribinos cuando lo necesites.
                  </p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.detailIcon}>
                  <MapPin
                    size={23}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span className={styles.detailLabel}>
                    DÓNDE ESTAMOS
                  </span>

                  <p className={styles.detailValue}>
                    Córdoba Capital, Argentina
                  </p>

                  <p>
                    Acompañamos estadías y propiedades
                    en nuestra ciudad.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}

      <section className={styles.closing}>
        <div className="container">
          <Reveal>
            <HeartHandshake
              className={styles.closingIcon}
              size={32}
              strokeWidth={1.25}
              aria-hidden="true"
            />

            <h2 className="serif">
              Qué lindo sería
              <br />
              <em>conocernos.</em>
            </h2>

            <p>
              Una conversación puede ser el comienzo
              de algo muy lindo.
            </p>

            <a
              href={generalMessage}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.closingButton}
            >
              Escribinos
              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </a>

            <span className={styles.signature}>
              Con cariño, Cecilia & Lourdes
            </span>
          </Reveal>
        </div>
      </section>
    </>
  );
}
