import Link from 'next/link';
import styles from './HomePaths.module.css';
import { Reveal } from '@/components/motion/Reveal/Reveal';
export function HomePaths() {
  return <section className={styles.section} aria-label="Hospedajes y servicios"><div className={`container ${styles.grid}`}>
    <Reveal><article className={styles.card}><p className="eyebrow">TEMPORARIOS</p><h2 className="serif">Encontrá tu lugar en la ciudad.</h2>
      <p>Próximamente vas a poder explorar el catálogo de departamentos y filtrar por zona, fechas, cantidad de huéspedes y características.</p>
      <Link href="/temporarios">Explorar hospedajes <span aria-hidden="true">↗</span></Link></article></Reveal>
    <Reveal delay={0.13}><article className={`${styles.card} ${styles.alt}`}><p className="eyebrow">SERVICIOS</p><h2 className="serif">Tu propiedad, bien gestionada.</h2>
      <p>Si tenés una unidad y querés delegar su gestión de manera profesional, HABITANA va a ir incorporando una propuesta clara, cuidada y confiable.</p>
      <Link href="/servicios">Conocer servicios <span aria-hidden="true">↗</span></Link></article></Reveal>
  </div></section>;
}
