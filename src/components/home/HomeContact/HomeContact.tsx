import Link from 'next/link';
import styles from './HomeContact.module.css';
import { Reveal } from '@/components/motion/Reveal/Reveal';
export function HomeContact() {
  return <section className={styles.section} aria-labelledby="home-contact-title"><div className="container"><Reveal>
    <p className="eyebrow">CONTACTO</p>
    <h2 id="home-contact-title" className="serif">Empecemos a construir<br /><em>la experiencia HABITANA.</em></h2>
    <p>Si querés alojarte, consultar por una unidad o conocer nuestra propuesta de gestión, podemos empezar por una primera conversación.</p>
    <Link href="/contacto" className="btn">Ir a contacto</Link></Reveal>
  </div></section>;
}
