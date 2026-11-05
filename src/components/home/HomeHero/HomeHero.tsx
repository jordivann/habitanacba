import styles from './HomeHero.module.css';
import { Reveal } from '@/components/motion/Reveal/Reveal';
import { HeroBackground } from './HeroBackground';
const featuredZones = ['Nueva Córdoba', 'Güemes', 'Centro', 'General Paz'];
const previewFields = [
  { title: 'Destino', value: 'Córdoba capital', arrow: true },
  { title: 'Llegada', value: 'Elegir fecha' },
  { title: 'Salida', value: 'Elegir fecha' },
  { title: 'Huéspedes', value: 'Seleccionar', arrow: true },
];

export function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <HeroBackground />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Reveal immediate delay={0.08} distance={14}>
          <p className={styles.eyebrow}>ESTADÍAS Y ALQUILERES TEMPORARIOS EN CÓRDOBA</p>
          <h1 id="home-title" className={`serif ${styles.title}`}>
            Tu lugar en Córdoba.
            <span>Sentite como en casa.</span>
          </h1>
          <p className={styles.lead}>
            Espacios cuidadosamente seleccionados para disfrutar la ciudad,
            a tu ritmo y con la comodidad de sentirte en casa.
          </p>

          {/* Solo presentación: no simula controles activos. */}
          <div className={styles.search} aria-label="Vista previa de los filtros del catálogo">
            {previewFields.map(({ title, value, arrow }) => (
              <div className={styles.field} key={title}>
                <span className={styles.fieldText}>
                  <strong>{title}</strong>
                  <span>{value}</span>
                </span>
                {arrow && <span className={styles.arrow} aria-hidden="true">⌄</span>}
              </div>
            ))}
            <span className={styles.searchAction}>Buscar <span aria-hidden="true">↗</span></span>
          </div>

          </Reveal>
          <Reveal immediate delay={0.50} distance={12}>
          <div className={styles.zones}>
            <span className={styles.zonesLabel}>Zonas destacadas</span>
            <div className={styles.chips}>
              {featuredZones.map(zone => <span className={styles.chip} key={zone}>{zone}</span>)}
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
