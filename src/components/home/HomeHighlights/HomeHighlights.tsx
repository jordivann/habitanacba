import styles from './HomeHighlights.module.css';
import { Reveal } from '@/components/motion/Reveal/Reveal';
const values = [
  { number: '01', title: 'Selección cuidada', description: 'Espacios elegidos con atención en ubicación, presentación, comodidad y experiencia general de estadía.' },
  { number: '02', title: 'Gestión ordenada', description: 'Un enfoque profesional para la administración de unidades temporarias, con seguimiento y criterio en cada proceso.' },
  { number: '03', title: 'Acompañamiento cercano', description: 'Queremos que la experiencia sea simple, clara y humana, tanto para quien se aloja como para quien confía su propiedad.' },
];
export function HomeHighlights() {
  return <section className={styles.section} aria-labelledby="home-values-title"><div className="container">
    <Reveal><p className="eyebrow">NUESTRA PROPUESTA</p>
    <h2 id="home-values-title" className="serif sectionTitle">Pensado para huéspedes<br />y también para propietarios.</h2></Reveal>
    <div className={styles.grid}>{values.map(value => <Reveal key={value.number} delay={Number(value.number) * 0.09}><article className={styles.card}>
      <span className={styles.number}>{value.number}</span><h3 className="serif">{value.title}</h3><p>{value.description}</p>
    </article></Reveal>)}</div>
  </div></section>;
}
