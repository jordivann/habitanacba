export const site = {
  name: 'HABITANA',
  tagline: 'Espacios para estar. Gestión para confiar.',
  description: 'HABITANA: gestión de propiedades y alquileres temporarios con atención cercana, criterio y cuidado en cada detalle.',
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'http://localhost:3000',
  nav: [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/temporarios', label: 'Temporarios' },
    { href: '/nosotras', label: 'Nosotras' },
    { href: '/contacto', label: 'Contacto' },
  ],
} as const;
export const isPublished = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
