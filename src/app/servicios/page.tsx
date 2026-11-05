
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import { Reveal } from '@/components/motion/Reveal/Reveal';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Servicios de gestión de alquileres temporarios',
  description:
    'Conocé los servicios de HABITANA: gestión de departamentos temporarios para propietarios y alojamientos en Córdoba capital.',
};

const benefits = [
  {
    number: '01',
    title: 'Presentación de la propiedad',
    description:
      'Trabajamos en la presentación del alojamiento para comunicar su identidad, sus características y sus comodidades.',
  },
  {
    number: '02',
    title: 'Gestión de estadías',
    description:
      'Acompañamos la organización de reservas, consultas y coordinación de las estadías, según las necesidades de cada propiedad.',
  },
  {
    number: '03',
    title: 'Atención cercana',
    description:
      'Buscamos que tanto propietarios como huéspedes tengan una comunicación clara, amable y organizada.',
  },
  {
    number: '04',
    title: 'Cuidado de los detalles',
    description:
      'Prestamos atención a la experiencia de alojamiento y a las tareas de coordinación que requiere cada unidad.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Nos contás sobre tu propiedad',
    description:
      'Conocemos la ubicación, las características del departamento y lo que necesitás.',
  },
  {
    number: '02',
    title: 'Evaluamos la propuesta',
    description:
      'Conversamos sobre el alcance de la gestión y las condiciones de trabajo.',
  },
  {
    number: '03',
    title: 'Definimos cómo avanzar',
    description:
      'Acordamos los próximos pasos para preparar y gestionar el alojamiento.',
  },
];

const questions = [
  {
    question: '¿Tengo que ocuparme personalmente de las reservas?',
    answer:
      'La idea de nuestro servicio es acompañarte en la gestión y coordinación de las estadías. El alcance exacto se define según cada propiedad y la modalidad de trabajo acordada.',
  },
  {
    question: '¿Cómo sé si mi departamento es adecuado?',
    answer:
      'Podés contarnos dónde está ubicado, cómo está equipado y cuáles son sus características. Con esa información podemos evaluar juntas las posibilidades.',
  },
  {
    question: '¿Cómo se cobra el servicio?',
    answer:
      'Las condiciones comerciales se conversan luego de conocer la propiedad y definir qué tareas de gestión necesitás. Podés escribirnos para recibir información.',
  },
  {
    question: '¿Puedo consultar sin comprometerme?',
    answer:
      'Sí. Podés comunicarte con nosotras para conocer la propuesta, plantear tus dudas y evaluar si HABITANA es lo que estás buscando.',
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* PRESENTACIÓN */}
      
        <section className={styles.hero} aria-labelledby="services-title">
        <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroContent}>
            <Reveal immediate direction="left">
                <p className={styles.eyebrow}>
                HABITANA / NUESTROS SERVICIOS
                </p>

                <h1 id="services-title" className={`serif ${styles.heroTitle}`}>
                Cuidamos tu espacio.
                <span>Vos disfrutá la tranquilidad.</span>
                </h1>

                <p className={styles.heroDescription}>
                Detrás de cada departamento hay una historia, una inversión
                y muchas expectativas. En HABITANA queremos acompañarte
                con una gestión cercana, organizada y atenta a los detalles.
                </p>

                <Link href="/contacto" className={styles.primaryButton}>
                Quiero conocer el servicio
                <span aria-hidden="true">↗</span>
                </Link>
            </Reveal>
            </div>

            <Reveal
            className={styles.heroVisual}
            immediate
            direction="right"
            delay={0.15}
            >
            <div className={styles.heroImageWrap}>
                <Image
                src="/images/servicios/hero-servicios.jpg"
                alt="Interior cálido y luminoso de un departamento"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 45vw"
                className={styles.image}
                />
            </div>

            <div className={styles.heroImageDetail}>
                <span>HABITANA</span>
                <span>Espacios con esencia de hogar.</span>
            </div>
            </Reveal>
        </div>
        </section>


      {/* PROPIETARIOS */}
      <section className={styles.owners} aria-labelledby="owners-title">
        <div className={`container ${styles.ownersInner}`}>
          <Reveal>
                        
            <div className={styles.ownersEditorial}>
            <Reveal
                className={styles.ownersVisual}
                direction="left"
            >
                <div className={styles.ownerImageWrap}>
                <Image
                    src="/images/servicios/owner-servicios.jpg"
                    alt="Departamento preparado para una estadía confortable"
                    fill
                    sizes="(max-width: 760px) 100vw, 43vw"
                    className={styles.image}
                />
                </div>
            </Reveal>

                <Reveal direction="right">
                    <div className={styles.sectionHeading}>
                    <p className={styles.eyebrow}>
                        01 / PARA PROPIETARIOS
                    </p>

                    <h2
                        id="owners-title"
                        className={`serif ${styles.sectionTitle}`}
                    >
                        Tu propiedad,
                        <br />
                        <em>en buenas manos.</em>
                    </h2>

                    <p className={styles.sectionLead}>
                        Sabemos que confiar tu departamento a otras personas
                        es una decisión importante.
                    </p>

                    <p className={styles.bodyText}>
                        Por eso, buscamos que puedas delegar la gestión de
                        alquileres temporarios con tranquilidad, manteniendo
                        una comunicación cercana y una propuesta adaptada
                        a las características de tu propiedad.
                    </p>
                    </div>
                </Reveal>
                </div>

          </Reveal>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.number} delay={index * 0.07}>
                <article className={styles.benefitCard}>
                  <span className={styles.benefitNumber}>
                    {benefit.number}
                  </span>

                  <h3 className="serif">{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className={styles.process} aria-labelledby="process-title">
        <div className="container">
          <Reveal>
            <div className={styles.processHeading}>
              <p className={styles.eyebrow}>CÓMO EMPEZAMOS</p>

              <h2 id="process-title" className={`serif ${styles.sectionTitle}`}>
                Todo comienza
                <br />
                <em>con una conversación.</em>
              </h2>

              <p className={styles.bodyText}>
                Cada departamento es diferente. Antes de ofrecerte una
                propuesta, queremos conocer tu espacio y entender qué
                necesitás.
              </p>
            </div>
          </Reveal>

          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.09}>
                <article className={styles.step}>
                  <span>{step.number}</span>
                  <h3 className="serif">{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className={styles.processAction}>
              <Link href="/contacto" className={styles.primaryButton}>
                Contanos sobre tu departamento
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HUÉSPEDES */}
      
<section className={styles.guests} aria-labelledby="guests-title">
  <div className={`container ${styles.guestsGrid}`}>
    <Reveal direction="left">
      <div className={styles.guestsContent}>
        <p className={styles.eyebrow}>
          02 / PARA HUÉSPEDES
        </p>

        <h2
          id="guests-title"
          className={`serif ${styles.sectionTitle}`}
        >
          Un lugar para estar.
          <br />
          <em>Un espacio para sentir.</em>
        </h2>

        <p>
          También acompañamos a quienes visitan Córdoba y buscan
          un alojamiento temporario cómodo, cálido y bien ubicado.
        </p>

        <p>
          Queremos que cada estadía sea una experiencia agradable,
          desde el primer contacto hasta el momento de volver a casa.
        </p>

        <Link href="/temporarios" className={styles.textLink}>
          Explorar alojamientos
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </Reveal>

    <Reveal
      className={styles.guestsVisual}
      direction="right"
      delay={0.12}
    >
      <div className={styles.guestsImageWrap}>
        <Image
          src="/images/servicios/visitors-servicios.jpg"
          alt="Alojamiento temporario cálido y acogedor"
          fill
          sizes="(max-width: 760px) 100vw, 45vw"
          className={styles.image}
        />
      </div>

      <div className={styles.guestsImageCaption}>
        CÓRDOBA · SENTITE COMO EN CASA
      </div>
    </Reveal>
  </div>
</section>


      {/* PREGUNTAS FRECUENTES */}
      <section className={styles.faq} aria-labelledby="faq-title">
        <div className={`container ${styles.faqGrid}`}>
          <Reveal>
            <div className={styles.faqHeading}>
              <p className={styles.eyebrow}>
                PREGUNTAS FRECUENTES
              </p>

              <h2 id="faq-title" className={`serif ${styles.sectionTitle}`}>
                ¿Tenés dudas?
                <br />
                <em>Estamos para ayudarte.</em>
              </h2>

              <p className={styles.bodyText}>
                Algunas respuestas para empezar a conocer cómo trabajamos.
              </p>
            </div>
          </Reveal>

          <div className={styles.faqList}>
            {questions.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.05}>
                <details className={styles.faqItem}>
                  <summary>
                    <span>{item.question}</span>
                    <span className={styles.faqIcon} aria-hidden="true">
                      +
                    </span>
                  </summary>

                  <p>{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className={styles.finalCta}>
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>HABLEMOS</p>

            <h2 className="serif">
              Tu propiedad merece
              <br />
              <em>una gestión con cariño.</em>
            </h2>

            <p>
              Contanos sobre tu departamento. Nos encantará conocerlo
              y conversar sobre cómo podemos acompañarte.
            </p>

            <Link href="/contacto" className={styles.lightButton}>
              Contactar a HABITANA
              <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
