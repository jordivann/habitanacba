'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import styles from './Header.module.css';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className={`${styles.header} ${isHome ? styles.headerHome : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="HABITANA - inicio">
          HABITANA
          <span className={styles.brandDot}>.</span>
          <small>GESTIÓN & TEMPORARIOS</small>
        </Link>

        <nav aria-label="Navegación principal" className={styles.nav}>
          {site.nav.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={item.href === '/contacto' ? styles.contact : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className={styles.mobileMenu}>
          <summary aria-label="Abrir menú">
            Menú <span aria-hidden>☰</span>
          </summary>

          <nav aria-label="Navegación móvil">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}