'use client';

import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'left' | 'right';
  immediate?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  distance = 20,
  direction = 'up',
  immediate = false,
}: RevealProps) {
  const reducedMotion = useReducedMotion();
  const offset = direction === 'left'
    ? { x: -distance }
    : direction === 'right'
      ? { x: distance }
      : { y: distance };

  const hidden = { opacity: 0, ...offset };
  const shown = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : hidden}
      {...(immediate
        ? { animate: shown }
        : { whileInView: shown, viewport: { once: true, amount: 0.12, margin: '0px 0px -40px 0px' } })}
      transition={{
        duration: reducedMotion ? 0 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
