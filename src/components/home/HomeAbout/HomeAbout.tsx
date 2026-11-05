import Image from 'next/image';
import Link from 'next/link';
import styles from './HomeAbout.module.css';
import { Reveal } from '@/components/motion/Reveal/Reveal';

export function HomeAbout() {
  return (
    <section className={styles.section} aria-labelledby="home-about-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.content} direction="left">
          <div className={styles.eyebrow}><span aria-hidden="true" />EL CORAZÓN DE HABITANA</div>
          <h2 id="home-about-title" className={`serif ${styles.title}`}>
            Cada estadía,<br /><em>un poquito de hogar.</em>
          </h2>
          <div className={styles.description}>
            <p>Somos <strong>Cecilia y Lourdes</strong>, las personas detrás de HABITANA.</p>
            <p>Creemos que un alojamiento es mucho más que un lugar donde quedarse. Es ese espacio al que llegás después de recorrer la ciudad, donde descansás, compartís y creás nuevos recuerdos.</p>
            <p>Por eso, ponemos dedicación y cariño en cada detalle, buscando que quienes nos eligen encuentren la calidez de un verdadero hogar.</p>
          </div>
          <Link href="/nosotras" className={styles.button}>Conocé nuestra historia <span aria-hidden="true">↗</span></Link>
          <div className={styles.signature}><span aria-hidden="true" />HECHO CON CARIÑO EN CÓRDOBA</div>
        </Reveal>

        <Reveal className={styles.visual} direction="right" delay={0.12}>
          <div className={styles.mainPhoto}>
            <Image src="/images/home/habitana-nosotras.jpg" alt="Imagen de presentación de HABITANA" fill sizes="(max-width: 760px) 80vw, (max-width: 1100px) 40vw, 35vw" className={styles.photo} />
          </div>
          <div className={styles.detailPhoto}>
            <Image src="/images/home/habitana-detalle.jpg" alt="Detalle cálido de un alojamiento" fill sizes="(max-width: 760px) 50vw, 25vw" className={styles.photo} />
          </div>
          <div className={styles.note}>
            <span className={styles.noteDecor} aria-hidden="true">H.</span>
            <p className={styles.noteText}>Creamos HABITANA con el amor de familia y el cuidado de los pequeños detalles, para que cada estadía tenga algo especial: la calidez de sentirse en casa.</p>
            <span className={styles.noteSignature}>Con cariño, Ceci &amp; Lourdes.</span>
          </div>
          <span className={styles.caption}>HABITANA — CÓRDOBA, ARGENTINA</span>
        </Reveal>
      </div>
    </section>
  );
}
