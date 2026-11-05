
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Reveal } from '@/components/motion/Reveal/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Nosotras | Conocé a Cecilia y Lourdes',
  description:
    'Conocé a Cecilia y Lourdes, las personas detrás de HABITANA. Un proyecto de gestión y alquileres temporarios en Córdoba inspirado en la calidez del hogar.',
};

const photos = [
  {
    src: '/images/nosotras/cecilia-y-lourdes.png',
    alt: 'Cecilia y Lourdes, creadoras de HABITANA',
    label: 'Nosotras',
    className: styles.photoMain,
  },
  {
    src: '/images/nosotras/momento-03.png',
    alt: 'Un momento compartido de Cecilia y Lourdes',
    label: 'Momentos compartidos',
    className: styles.photoSecond,
  },
  {
    src: '/images/nosotras/momento-01.png',
    alt: 'Una escena cotidiana que forma parte de HABITANA',
    label: 'Lo cotidiano',
    className: styles.photoThird,
  },
  {
    src: '/images/nosotras/momento-02.png',
    alt: 'Un recuerdo personal del proyecto HABITANA',
    label: 'Con cariño',
    className: styles.photoFourth,
  },
];

const values = [
  {
    number: '01',
    title: 'Cercanía',
    description:
      'Nos gusta conocer a las personas, escuchar sus necesidades y ofrecer una atención cálida y personal.',
  },
  {
    number: '02',
    title: 'Cuidado',
    description:
      'Creemos que los pequeños detalles son los que transforman un espacio en una experiencia especial.',
  },
  {
    number: '03',
    title: 'Confianza',
    description:
      'Buscamos construir relaciones claras y duraderas, tanto con nuestros huéspedes como con los propietarios.',
  },
];

export default function NosotrasPage() {
  return (
    <>
      {/* PRESENTACIÓN */}

      <section
        className={styles.hero}
        aria-labelledby="nosotras-title"
      >
        <div className={`container ${styles.heroInner}`}>
          <Reveal immediate>
            <p className={styles.eyebrow}>
              HABITANA / NUESTRA HISTORIA
            </p>

            <h1
              id="nosotras-title"
              className={`serif ${styles.heroTitle}`}
            >
              Detrás de cada espacio,
              <span>hay personas que lo hacen hogar.</span>
            </h1>

            <p className={styles.heroDescription}>
              Somos Cecilia y Lourdes. Creemos en los espacios
              que reciben, en los pequeños detalles y en esa
              sensación tan especial de sentirse en casa.
            </p>
          </Reveal>
        </div>

        <div className={styles.heroBubble} aria-hidden="true" />
      </section>

      {/* GALERÍA FOTOGRÁFICA */}

      <section
        className={styles.gallerySection}
        aria-labelledby="gallery-title"
      >
        <div className="container">
          <Reveal>
            <div className={styles.galleryHeading}>
              <p className={styles.eyebrow}>
                UN POQUITO DE NOSOTRAS
              </p>

              <h2
                id="gallery-title"
                className={`serif ${styles.sectionTitle}`}
              >
                Nuestra historia,
                <br />
                <em>en pequeños momentos.</em>
              </h2>

              <p>
                Porque HABITANA también está hecha de momentos,
                encuentros y recuerdos que nos representan.
              </p>
            </div>
          </Reveal>

          <div className={styles.gallery}>
            {photos.map((photo, index) => (
              <Reveal
                key={photo.src}
                className={photo.className}
                delay={index * 0.08}
                distance={18}
              >
                <figure className={styles.photoFigure}>
                  <div className={styles.photoFrame}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={
                        index === 0
                          ? '(max-width: 760px) 100vw, 55vw'
                          : '(max-width: 760px) 50vw, 25vw'
                      }
                      className={styles.photo}
                    />
                  </div>

                  <figcaption className={styles.photoCaption}>
                    {photo.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className={styles.gallerySignature}>
              <span>Con cariño, Ceci & Lourdes.</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NUESTRA HISTORIA */}

      <section
        className={styles.story}
        aria-labelledby="story-title"
      >
        <div className={`container ${styles.storyGrid}`}>
          <Reveal direction="left">
            <div className={styles.storyHeading}>
              <p className={styles.eyebrow}>
                LA ESENCIA DE HABITANA
              </p>

              <h2
                id="story-title"
                className={`serif ${styles.sectionTitle}`}
              >
                El amor por los detalles.
                <br />
                <em>La calidez de lo familiar.</em>
              </h2>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.12}>
            <div className={styles.storyContent}>
              <p>
                HABITANA nace de una idea sencilla: que cada
                persona que llegue a uno de nuestros espacios
                pueda encontrar un poquito de la calidez de su hogar.
              </p>

              <p>
                Queremos que nuestros departamentos sean mucho
                más que un lugar para pasar unos días. Que sean
                espacios cómodos, cuidados y preparados para
                recibir nuevas historias.
              </p>

              <p>
                Esa misma dedicación es la que buscamos transmitir
                a los propietarios que confían en nuestra gestión:
                cercanía, compromiso y atención a cada detalle.
              </p>

              <div className={styles.storyNote}>
                <span className={styles.noteLabel}>
                  NUESTRA FORMA DE HABITAR
                </span>

                <p>
                  Que cada estadía tenga algo especial:
                  la tranquilidad y el cariño de sentirse en casa.
                </p>

                <span className={styles.noteSignature}>
                  C & L
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALORES */}

      <section
        className={styles.values}
        aria-labelledby="values-title"
      >
        <div className="container">
          <Reveal>
            <div className={styles.valuesHeading}>
              <p className={styles.eyebrow}>
                LO QUE NOS REPRESENTA
              </p>

              <h2
                id="values-title"
                className={`serif ${styles.sectionTitle}`}
              >
                Nuestra manera
                <br />
                <em>de hacer las cosas.</em>
              </h2>
            </div>
          </Reveal>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <Reveal
                key={value.number}
                delay={index * 0.1}
                className={styles.valueReveal}
              >
                <article className={styles.value}>
                  <span className={styles.valueNumber}>
                    {value.number}
                  </span>

                  <h3 className="serif">
                    {value.title}
                  </h3>

                  <p>{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}

      <section className={styles.contact}>
        <div className="container">
          <Reveal>
            <p className={styles.contactEyebrow}>
              HABLEMOS
            </p>

            <h2 className="serif">
              Nos encantará
              <br />
              <em>conocerte.</em>
            </h2>

            <p>
              Ya sea que busques un lugar para alojarte
              o quieras confiar la gestión de tu propiedad,
              estamos para escucharte.
            </p>

            <Link
              href="/contacto"
              className={styles.contactButton}
            >
              Escribinos
              <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
