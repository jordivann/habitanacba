
'use client';

import { useEffect, useState } from 'react';
import styles from './HomeHero.module.css';

const NIGHT_START = 19;
const DAY_START = 7;

function isNightTime(): boolean {
  const hour = new Date().getHours();

  return hour >= NIGHT_START || hour < DAY_START;
}

export function HeroBackground() {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const updateBackground = () => {
      setIsNight(isNightTime());
    };

    updateBackground();

    // Actualizar si el usuario mantiene la página abierta.
    const interval = window.setInterval(
      updateBackground,
      60_000
    );

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className={`${styles.media} ${
        isNight ? styles.mediaNight : ''
      }`}
      aria-hidden="true"
    />
  );
}
